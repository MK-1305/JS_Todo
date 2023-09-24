import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値（value）をinputTextに入れる
  const inputText = document.getElementById("add-text").value;
  // 追加後に文字を消す
  document.getElementById("add-text").value = "";
  // div class"list-row"生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  // liタグの中にinputTextを入れる
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了リスト(ul)に追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
