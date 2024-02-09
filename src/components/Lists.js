import "../styles/styles.css";
const Lists = (list) => {
  console.log("mega", list.data);
  const handleRightButtonClick = (event) => {
    const { id } = event.target;
    if (list.vis != "") {
      console.log("listc", list.data[id]);
      list.setNewList([...list.newList, list.data[id]]);
      list.setList(
        list.data.filter((item) => item.title !== list.data[id].title)
      );
    } else {
        list.setListtwo([list.data[id],...list.listtwoo, ]);
        list.setNewList(
          list.data.filter((item) => item.title !== list.data[id].title)
        );
    }
  };
  const handleLeftButtonClick = (event) => {
    const { id } = event.target;
    if (list.vis != "") {
      console.log("listc", list.data[id]);
      list.setNewList([...list.newList, list.data[id]]);
      list.setList(
        list.data.filter((item) => item.title !== list.data[id].title)
      );
    } else {
      list.setListone([list.data[id], ...list.listonee ]);
      list.setNewList(
        list.data.filter((item) => item.title !== list.data[id].title)
      );
    }
  };

  const handleCheckbox = (event) => {
    const { id, checked } = event.target;
    console.log("bio", list);
    console.log("bioli", event.target.id, event.target.checked);
    list.onCheckboxChange(parseInt(id) - 1, checked);
  };
  return (
    <div className="list-container">
      <div className="checkbox-container">
        <input type="checkbox" id={list.index} onChange={handleCheckbox} />
        <label htmlFor="list1" style={{ fontWeight: "bold" }}>
          List {list.index}
        </label>
      </div>
      {list.data?.map((val, index) => {
        return (
          <div className="list-box">
            <div className="boxPadding">
              <h4>{val.title}</h4>
              <p>{val.des}</p>
            </div>
            <div className="button-container">
              {" "}
              <button
                className="arrow-button left"
                onClick={handleLeftButtonClick}
                id={index}
                style={{
                  display:
                    list.vis && list.vis.includes("left")
                      ? "none"
                      : "inline-block",
                }}
              >
                🡰
              </button>
              <button
                className="arrow-button right"
                onClick={handleRightButtonClick}
                id={index}
                style={{
                  display:
                    list.vis && list.vis.includes("right")
                      ? "none"
                      : "inline-block",
                }}
              >
                🡲
              </button>
            </div>

            {/* Add your list items here */}
          </div>
        );
      })}

      {/* Add more list boxes as needed */}
    </div>
  );
};
export default Lists;
