function QuickSort(Arr) {
  if (Arr.length <= 1) {
    return Arr;
  }

  const pivot = Arr[Arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < Arr.length - 1; i++) {
    if (Arr[i] < pivot) {
      leftArr.push(Arr[i]);
      //   console.log(Arr[i]);
    } else {
      rightArr.push(Arr[i]);
      // console.log(Arr[i]);
    }
    console.log(Arr[i]);
  }

  return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
}

const items = [1, 5, 2, 99, 81, 100, 91, 144, 121, 91, 85, 74, 12, 5, 10];
console.log(QuickSort(items));
