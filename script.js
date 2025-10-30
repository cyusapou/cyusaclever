function calc() {
      let a = parseFloat(document.getElementById("numA").value);
      let b = parseFloat(document.getElementById("numB").value);
      let c = parseFloat(document.getElementById("numC").value);
      let output = document.getElementById("output");
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        output.innerHTML = "<span style='color:red'>Please enter valid numbers!</span>";
        return;
      }
      if (a === 0) {
        output.innerHTML = "<span style='color:red'>'a' cannot be zero (not quadratic)!</span>";
        return;
      }
      let delta = b * b - 4 * a * c;
      let result = "";

      if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a) ;
        let x2 = (-b - Math.sqrt(delta)) / (2 * a) ;
        result = `Two real solutions:<br>
                  x₁ = <strong>${x1}</strong><br>
                  x₂ = <strong>${x2}</strong><br><br>
                  Roots: { ${x1} , ${x2}}` ;
      }
      else if (delta === 0) {
        let x = -b / (2 * a);
        result = `One real solution (repeated root):<br>
                  x = <strong>${x}</strong><br><br>
                  Root: { ${x}`;
      }
      else {
        let realPart = (-b / (2 * a)).toFixed(4);
        let imagPart = (Math.sqrt(-delta) / (2 * a)).toFixed(4);
        result = `No real solutions (complex roots):<br>
                  x₁ = ${realPart} + ${imagPart}i<br>
                  x₂ = ${realPart} - ${imagPart}i`;
      }
      result += `<br><br>Discriminant (Δ) = ${delta.toFixed(4)}`;

      output.innerHTML = result;
    }