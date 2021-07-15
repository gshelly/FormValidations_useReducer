import React, { useReducer } from "react";
import "../App.css";

const MoreForm = (props) => {

	const initialState = {
		firstName: {
			value: '',
			error: ""
		},
		lastName: {
			value: '',
			error: null
		},
		email: {
			value: '',
			error: null
		},
		password: {
			value: '',
			error: null
		},
		confirmPassword: {
			value: '',
			error: null
		}
	};

	const reducer = (state, action) => {

		switch(action.type) {
			case "SET_FIRSTNAME_VALUE":
				return {
					...state,
					firstName: {
						...state.firstName,
						value: action.payload,
					},
				};
			case "SET_FIRSTNAME_ERROR" :
				return {
					...state,
					firstName: {
						...state.firstName,
						error: action.payload
					}
				}
				case "SET_LASTNAME_VALUE":
					return {
						...state,
						lastName: {
							...state.lastName,
							value: action.payload,
						},
					};
				case "SET_LASTNAME_ERROR" :
					return {
						...state,
						lastName: {
							...state.lastName,
							error: action.payload
						}
					}
					case "SET_EMAIL_VALUE":
					return {
						...state,
						email: {
							...state.email,
							value: action.payload,
						},
					};
				case "SET_EMAIL_ERROR" :
					return {
						...state,
						email: {
							...state.email,
							error: action.payload
						}
					}
					case "SET_PASSWORD_VALUE":
					return {
						...state,
						password: {
							...state.password,
							value: action.payload,
						},
					};
				case "SET_PASSWORD_ERROR" :
					return {
						...state,
						password: {
							...state.password,
							error: action.payload
						}
					}
					case "SET_CPWD_VALUE":
					return {
						...state,
						confirmPassword: {
							...state.confirmPassword,
							value: action.payload,
						},
					};
				case "SET_CPWD_ERROR" :
					return {
						...state,
						confirmPassword: {
							...state.confirmPassword,
							error: action.payload
						}
					}
			default: return state
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const handleFirstNameEvent = (event) => {
	
		const { value } = event.target;
		if(value.length < 2 && value.length > 0 ) {
			dispatch( {
				type: "SET_FIRSTNAME_ERROR",
				payload: "First Name must be at least 2 characters"
			})
		}
		else {
			dispatch( {
				type: "SET_FIRSTNAME_ERROR",
				payload: ""
			})
		}
		dispatch( {
			type: "SET_FIRSTNAME_VALUE",
			payload: value
			
		});
	};

	const handleLastNameEvent = (event) => {
		
		const { value } = event.target;
		if(value.length < 2 && value.length > 0 ) {
			dispatch( {
				type: "SET_LASTNAME_ERROR",
				payload: "Last Name must be at least 2 characters"
			})
		}
		else {
			dispatch( {
				type: "SET_LASTNAME_ERROR",
				payload: ""
			})
		}

		dispatch( {
			type: "SET_LASTNAME_VALUE",
			payload: value
			
		});
	};

	const handleEmailEvent = (event) => {
		
		const { value } = event.target;
		if(value.length < 2 && value.length > 0 ) {
			dispatch( {
				type: "SET_EMAIL_ERROR",
				payload: "Email must be at least 2 characters"
			})
		}
		else {
			dispatch( {
				type: "SET_EMAIL_ERROR",
				payload: ""
			})
		}

		dispatch( {
			type: "SET_EMAIL_VALUE",
			payload: value
			
		});
	};

	const handlePasswordEvent = (event) => {
		
		const { value } = event.target;
		if(value.length < 8 && value.length > 0 ) {
			dispatch( {
				type: "SET_PASSWORD_ERROR",
				payload: "Password must be at least 8 characters"
			})
		}
		else {
			dispatch( {
				type: "SET_PASSWORD_ERROR",
				payload: ""
			})
		}

		dispatch( {
			type: "SET_PASSWORD_VALUE",
			payload: value
			
		});
	};

	const handleCPWDEvent = (event) => {
		//event.preventDefault()
		const { value } = event.target;
		if(state.password.value !== value && value.length > 0 ) {
			dispatch( {
				type: "SET_CPWD_ERROR",
				payload: "Passwords must match"
			})
		}
		else {
			dispatch( {
				type: "SET_CPWD_ERROR",
				payload: ""
			})
		}

		dispatch( {
			type: "SET_CPWD_VALUE",
			payload: value
			
		});
	};

	return (
		<form>
			{JSON.stringify(state)}
			<div className="Main-content">
				<label> First Name </label>
				<input placeholder="Search.." type="text" value={state.firstName.value } onChange={handleFirstNameEvent} />
			</div>
			{
				state.firstName.error ? <p className="Error"> {state.firstName.error}  </p> : ""
			}

			<div className="Main-content">
				<label> Last Name </label>
				<input placeholder="Search.." type="text" onChange={handleLastNameEvent} />
			</div>
			{
				state.lastName.error ? <p className="Error"> {state.lastName.error}  </p> : ""
			}

			<div className="Main-content">
				<label> Email </label>
				<input placeholder="Search.." type="text" onChange={handleEmailEvent} />
			</div>
			{
				state.email.error ? <p className="Error"> {state.email.error}  </p> : ""
			}
			<div className="Main-content">
				<label> Password </label>
				<input placeholder="Search.." type="password" onChange={handlePasswordEvent} />
			</div>
			{
				state.password.error ? <p className="Error"> {state.password.error}  </p> : ""
			}

			<div className="Main-content">
				<label> Confirm Password </label>
				<input placeholder="Search.." type="password" onChange={handleCPWDEvent} />
			</div>
			{
				state.confirmPassword.error ? <p className="Error"> {state.confirmPassword.error}  </p> : ""
			}
		</form>
	);
};

export default MoreForm;
