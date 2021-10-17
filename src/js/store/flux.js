const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			placeCharacters: [],
			placePlanets: [],
			favorites: []
		},
		actions: {
			listCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ placeCharacters: data.results }))
					.catch(err => console.error(err));
			},

			listPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ placePlanets: data.results }))
					.catch(err => console.error(err));
			},

			addFavorites: name => {
				let favoriteList = getStore().favorites;
				if (!favoriteList.includes(name)) {
					favoriteList.push(name);
					setStore({ favorites: favoriteList });
				}
			},
			deleteFavorites: name => {
				let favoriteList = getStore().favorites;
				favoriteList = favoriteList.filter(item => name !== item);
				setStore({ favorites: favoriteList });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
