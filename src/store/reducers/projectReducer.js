const initState = {
  projects: [
    {
      title: "title 1",
      content:
        "lorem ipsumwheg3tr73ehwjjedhgrfybuhdwijoeduhrfygedwjipdjruhfgyvbiufejdwikdrjfuhyeudjiruhetgiybefjefuhtgyrifj3ftuhruj",
      authorFirstName: "jay Kalia",
      authorLastName: "Kalia",
      createdAt: "26 Jan",
      id: 1,
    },
    {
      title: "title 1",
      content:
        "lorem ipsumwheg3tr73ehwjjedhgrfybuhdwijoeduhrfygedwjipdjruhfgyvbiufejdwikdrjfuhyeudjiruhetgiybefjefuhtgyrifj3ftuhruj",
      authorFirstName: "jay Kalia",
      authorLastName: "Kalia",
      createdAt: "26 Jan",
      id: 2,
    },
    {
      title: "title 1",
      content:
        "lorem ipsumwheg3tr73ehwjjedhgrfybuhdwijoeduhrfygedwjipdjruhfgyvbiufejdwikdrjfuhyeudjiruhetgiybefjefuhtgyrifj3ftuhruj",
      authorFirstName: "jay Kalia",
      authorLastName: "Kalia",
      time: "26 Jan",
      id: 3,
    },
    {
      title: "title 1",
      content:
        "lorem ipsumwheg3tr73ehwjjedhgrfybuhdwijoeduhrfygedwjipdjruhfgyvbiufejdwikdrjfuhyeudjiruhetgiybefjefuhtgyrifj3ftuhruj",
      authorFirstName: "jay Kalia",
      authorLastName: "Kalia",
      createdAt: "26 Jan",
      id: 4,
    },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("New project created", action.project);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
