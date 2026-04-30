export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const FromUnit = document.querySelector(".converter-from");
  const ToUnit = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  FromUnit.innerHTML = "";
  ToUnit.innerHTML = "";

  for (const unit of lengthUnit) {
    FromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    ToUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }
  console.log("FromUnit = " + FromUnit);
  console.log("ToUnit = " + ToUnit);

  // 最初のオプションを選択
  if (FromUnit.options.length > 0) {
    FromUnit.selectedIndex = 0;
  }
  if (ToUnit.options.length > 0) {
    ToUnit.selectedIndex = 1;
  }

  /**
   * 単位変換を実行するメイン関数
   */
  function convertUnits() {
    const Value = parseFloat(converterInput.value);

    // 3. isNaN 関数を使用して、値が数値であるかを確認
    if (isNaN(Value)) {
      // 値が数値でない（NaN）場合
      converterResult.textContent = "Please enter a valid number";
      // 4. 処理を終了
      return;
    }
    const fromBase = FromUnit.value;
    const toBase = ToUnit.value;
    const converted = (Value * fromBase) / toBase;

    // 結果を3桁まで丸める
    converterResult.textContent = `${Value} ${lengthUnit[FromUnit.selectedIndex].name} = ${converted.toFixed(3)} ${lengthUnit[ToUnit.selectedIndex].name}`;
  }

  converterForm.addEventListener("input", convertUnits);

  convertUnits();
}
