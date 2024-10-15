// 1, 1, 2, 3, 5, 8, ... n

function fibonacci (n) {
  if (n < 2) return 1;
  else return fibonacci(n-2) + fibonacci(n-1);
}

exports.fibonacci = fibonacci;
