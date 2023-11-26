const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				planets: [],
				hearts:[],
				startships: [],
				characters:[]
			},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},loadData:() =>{
				const {loadDatacharacters}=getActions();
				loadDatacharacters(1,27);
				const {loadDataplanets}=getActions();
				loadDataplanets();
				loadDatacharacters(28,55);
				const {loadDatastartship}=getActions();
				loadDatastartship();
				loadDatacharacters(56,82);
				
			},
			loadDataplanets: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				for(let i=1; i<=60; i++){
				fetch("https://www.swapi.tech/api/planets"+"/"+ i.toString()
				)
					.then(res => {
						if (res.status>= 200 && res.status<=300){
							console.log("el request se hizo bien");
							return res.json();
						}else{
							console.log(`hubo un error ${res.status} en el request`)
						}
					})
					.then(data => {
							
							const{addplanets}=getActions();
							addplanets(data.result.properties);
							
					  })
					.catch(error => console.error(error));
				 
					}
					
			},
			addplanets:(data)=>{
				const {planets}=getStore()
				setStore({planets:[...planets, data]})
			},
			setfavorites:(name)=>{
				setStore({hearts:name})
			},
			deletehearts:(indexdelete)=>{
				const {hearts}=getStore();
				setStore({hearts:hearts.filter((item, index)=>index!=indexdelete)})
				
			},loadDatastartship: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				for(let i=2; i<=75; i++){
				fetch("https://www.swapi.tech/api/starships"+"/"+ i.toString()
				)
					.then(res => {
						if (res.status>= 200 && res.status<=300){
							console.log("el request se hizo bien");
							return res.json();
						}else{
							console.log(`hubo un error ${res.status} en el request`)
							}
					})
					.then(data => {
							const{addstartship}=getActions();
							addstartship(data.result.properties);
					})
					.catch(error => console.error(error));
				 
					}
					
			},addstartship:(data)=>{
				const {startships}=getStore();
				setStore({startships:[...startships, data]});

			},loadDatacharacters: (start, end) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				for(let i=start; i<=end; i++){
				fetch("https://www.swapi.tech/api/people"+"/"+ i.toString()
				)
					.then(res => {
						if (res.status>= 200 && res.status<=300){
							console.log("el request se hizo bien");
							return res.json();
						}else{
							console.log(`hubo un error ${res.status} en el request`)
							}
					})
					.then(data => {
							const{addcharacter}=getActions();
							addcharacter(data.result.properties);
					})
					.catch(error => console.error(error));
				 
					}
					
			},addcharacter:(data)=>{
				console.log(data)
				const {characters}=getStore();
				setStore({characters:[...characters, data]});

			},changeColor: (index, color) => {
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