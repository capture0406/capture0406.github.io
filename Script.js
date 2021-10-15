let sName = `m855a1`;

const queryS = `{
  itemsByName(name: ${sName}) {
      id,
      name,
      shortName
  }
}`;

fetch("https://tarkov-tools.com/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: queryS,
  }),
})
  .then((r) => r.json())
  .then((data) => console.log("data returned:", data));
