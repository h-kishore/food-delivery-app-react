const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am the h1 tage"),
    React.createElement("h1", {}, "i am the h2 tag"),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "i am the h1 tage"),
    React.createElement("h1", {}, "i am the h2 tag"),
  ]),
])
const root = ReactDOM.createRoot(document.getElementById("root"))

