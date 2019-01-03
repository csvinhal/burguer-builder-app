import React, { Component } from "react";
import axios from '../../axios-orders';
import Burguer from "../../components/Burguer/Burguer";
import OrderSummary from "../../components/Burguer/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from "../../hoc/ReactAux/ReactAux";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import BuildControls from "./../../components/Burguer/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurguerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
		loading: false,
		error: null
	};

	componentDidMount() {
		console.log(this.props);
		axios.get('https://react-my-burguer-951f8.firebaseio.com/ingredients.json')
			.then(response => {
				this.setState({ ingredients: response.data })
			})
			.catch(error => {
				this.setState({ error: error })
			});
	}

	updatePurchaseState = ingredients => {
		const sum = Object.keys(ingredients)
			.map(key => ingredients[key])
			.reduce((acc, cur) => acc + cur, 0);
		this.setState({ purchaseable: sum > 0 });
	};

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		if (oldCount) {
			const updatedCount = oldCount - 1;
			const updatedIngredients = {
				...this.state.ingredients
			};
			updatedIngredients[type] = updatedCount;
			const priceDeduction = INGREDIENT_PRICES[type];
			const oldPrice = this.state.totalPrice;
			const newPrice = oldPrice - priceDeduction;
			this.setState({
				totalPrice: newPrice,
				ingredients: updatedIngredients
			});
			this.updatePurchaseState(updatedIngredients);
		}
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		const queryParams = [];

		for (let i in this.state.ingredients) {
			queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`);
		}
		queryParams.push(`price=${this.state.totalPrice}`);
		const queryString = queryParams.join('&');
		this.props.history.push({
			pathname: '/checkout',
			search: `?${queryString}`
		});
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;

		let burguer = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

		if (this.state.ingredients) {
			burguer = (
				<Aux>
					<Burguer ingredients={this.state.ingredients} />
					<BuildControls
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disabled={disabledInfo}
						price={this.state.totalPrice}
						purchaseable={!this.state.purchaseable}
						ordered={this.purchaseHandler}
					/>
				</Aux>);

			orderSummary = <OrderSummary
				ingredients={this.state.ingredients}
				puchaseCancelled={this.purchaseCancelHandler}
				puchaseContinued={this.purchaseContinueHandler}
				price={this.state.totalPrice}
			/>;
		}

		if (this.state.loading) {
			orderSummary = <Spinner />
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					{orderSummary}
				</Modal>
				{burguer}
			</Aux>
		);
	}
}

export default withErrorHandler(BurguerBuilder, axios);
