import accounts from "../database/jsons/accounts.json";

const auth = (userValue) => {
	let result = accounts.find(
		(arr) =>
			arr.username === userValue.username.toLowerCase() &&
			arr.password === userValue.password.toLowerCase()
	);

	if (result) {
		sessionStorage.setItem("pathname", result.pathname);
	}

	// it return object or undefined
	return result;
};

const isValid = (userValue) => {
	let result = accounts.find(
		(arr) =>
			arr.username === userValue.username.toLowerCase() &&
			arr.password === userValue.password.toLowerCase()
	);

	// it return object or undefined
	if (result === undefined) {
		return true;
	} else {
		return false;
	}
};

export { auth, isValid };
