// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
//   isLoading: false,
// };

// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         isLoading: false,
//         balance: state.balance + action.payload,
//       };

//     case "account/withdraw":
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// }
// /*
// Non-Convenient way of dispatching actions , so the alternative approach is the action creators
// */
// // store.dispatch({ type: "account/deposit", payload: 500 });
// // store.dispatch({ type: "account/withdraw", payload: 200 });
// // store.dispatch({ type: "account/requestLoan", payload: 200 });
// // store.dispatch({ type: "account/withdraw", payload: 100 });
// // store.dispatch({ type: "account/payLoan" });

// /**
// action creators are just function that return action objects
//  */

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });
//     //API Call
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;
//     // console.log();
//     //return action
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }
// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }
// export function payLoan() {
//   return { type: "account/payLoan" };
// }
