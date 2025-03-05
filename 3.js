function drawImage(size) {
  let pattern = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Jika berada di baris ke-3 atau kolom ke-3 (index 2)
      if (
        i === Math.floor(size / 2) ||
        j === Math.floor(size / 2) ||
        (i === Math.floor(size - size) && j === Math.floor(size - size)) ||
        (i === Math.floor(size - 1) && j === Math.floor(size - 1)) ||
        (i === Math.floor(size - size) && j === Math.floor(size - 1)) ||
        (i === Math.floor(size - 1) && j === Math.floor(size - size))
      ) {
        pattern += " *";
        //   } else if (i === Math.floor(size / 2) && j === Math.floor(size / 2)) {
        //     pattern += " #";
      } else {
        pattern += " #";
      }
    }
    pattern += "\n"; // Pindah ke baris baru setelah setiap baris selesai
  }
  console.log(pattern);
}

// Contoh penggunaan:
drawImage(5);
drawImage(7);
