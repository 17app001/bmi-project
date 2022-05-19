const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");

const commentValue = ['體重過輕', '正常', '過重', '肥胖', '中度肥胖', '重度肥胖'];
const bmiValue = [18.5, 24, 27, 30, 35, 35];

function calc() {
    if (heightEl.value === '' || weightEl.value === '') {
        alert("請輸入正確數值");
        return;
    }
    let height = heightEl.value;
    let weight = weightEl.value;

    let bmi = Math.round(weight / Math.pow(height / 100, 2) * 100) / 100;

    let comment = "";
    for (let i = 0; i < bmiValue.length; i++) {
        if (i == 0) {
            if (bmi < bmiValue[i]) {
                comment = commentValue[i];
                break;
            }
        } else if (i == bmiValue.length - 1) {
            if (bmi >= bmiValue[i]) {
                comment = commentValue[i];
                break;
            }
        } else {
            if (bmi >= bmiValue[i - 1] && bmi < bmiValue[i]) {
                comment = commentValue[i];
                break;
            }
        }
    }
    console.log(comment);
    document.querySelector("#result").innerHTML = `${bmi}(${comment})`;

}