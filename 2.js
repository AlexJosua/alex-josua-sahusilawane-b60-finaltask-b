function bubbleSort(arr) {
  let nilai = arr.length;
  for (let i = 0; i < nilai - 1; i++) {
    // Setiap iterasi akan memindahkan nilai terbesar ke posisi akhir
    for (let j = 0; j < nilai - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tukar posisi
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let array = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21];
console.log("Array sebelum diurutkan:", array);
console.log("Array setelah diurutkan:", bubbleSort(array));
