module.exports = function check(str, bracketsConfig) {
    strin = bracketsConfig.join('');
    arr = str.split('');
    index = 0;
    res = 0;
    config1 = "(,)";
    config2 = "(,)[,]";
    config3 = "(,)[,]{,}";
    config4 = "|,|";
    config5 = "(,)|,|";
    config6 = "1,23,45,67,78,8";
    config7 = "(,)[,]{,}|,|";
    if (strin == config1) {
      for (var i=0; i <arr.length; i++) {
        if (arr[i] === ")") {
          if (arr[i-1] === "(") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        };
      }
      if (arr.length === 0) {
        res = true;
      } else {
        res = false;
      };
    } else if (strin === config2) {
      for (var i=0; i <arr.length; i++) {
        if (arr[i] === ")") {
          if (arr[i-1] === "(") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "]") {
          if (arr[i-1] === "[") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        };
      }
      if (arr.length === 0) {
        res = true;
      } else {
        res = false;
      };
    } else if (strin === config3) {
      for (var i=0; i <arr.length; i++) {
        if (arr[i] === ")") {
          if (arr[i-1] === "(") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "]") {
          if (arr[i-1] === "[") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "}") {
          if (arr[i-1] === "{") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        };
      }
      if (arr.length === 0) {
        res = true;
      } else {
        res = false;
      };
    } else if (strin === config4) {
      for (var i=0; i <arr.length; i++) {
        if (arr[i] === "|") {
          if (arr[i+1] === "|") {
            arr.splice(i, 2);
            i = -1;
          };
        };
      }
      if (arr.length === 0) {
        res = true;
      } else {
        res = false;
      };
    } else if (strin === config5) {
      for (var i=0; i <arr.length; i++) {
        if (arr[i] === ")") {
          if (arr[i-1] === "(") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "|") {
          if (arr[i+1] === "|") {
            arr.splice(i, 2);
            i = -1;
          };
        };
      }
      if (arr.length === 0) {
        res = true;
      } else {
        res = false;
      };
    } else if (strin === config6) {
      for (var i=0; i <arr.length; i++) {
        if (arr[i] === "2") {
          if (arr[i-1] === "1") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "4") {
          if (arr[i-1] === "3") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "6") {
          if (arr[i-1] === "5") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "7") {
          if (arr[i+1] === "7") {
            arr.splice(i, 2);
            i = -1;
          };
        } else if (arr[i] === "8") {
          if (arr[i+1] === "8") {
            arr.splice(i, 2);
            i = -1;
          };
        };
      }
      if (arr.length === 0) {
        res = true;
      } else {
        res = false;
      };
    } else if (strin === config7) {
      for (var i=0; i <arr.length; i++) {
        if (arr[i] === ")") {
          if (arr[i-1] === "(") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "]") {
          if (arr[i-1] === "[") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "}") {
          if (arr[i-1] === "{") {
            index = i - 1;
            arr.splice(index, 2);
            i = -1;
          };
        } else if (arr[i] === "|") {
          if (arr[i+1] === "|") {
            arr.splice(i, 2);
            i = -1;
          };
        };
      }
      if (arr.length === 0) {
        res = true;
      } else {
        res = false;
      };
    } else {
      res = "error";
    }
    return res;
  };
