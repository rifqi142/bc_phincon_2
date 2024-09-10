document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  const nameField = document.getElementById("nama");
  const kelasField = document.getElementById("kelas");
  const jenisKelaminFields = document.getElementsByName("jenis_kelamin");
  const tglField = document.getElementById("tanggal_lahir");
  const pendidikanField = document.getElementById("pendidikan_terakhir");
  const jurusanField = document.getElementById("jurusan");

  const jenkelField = document.getElementById("jen_kel");

  const optionDash = document.getElementById("strip");

  const tableBody = document.querySelector("table tbody");

  document.addEventListener("change", function (event) {
    // jika pendidikan sudah dipilih maka tidak dapat kembali -
    if (event.target.id === "pendidikan_terakhir") {
      if (pendidikanField.value !== "-") {
        optionDash.disabled = true;
      }
    }
  });
  function showError(input, message) {
    const parentDiv = input.parentElement;
    const errorElement = parentDiv.querySelector(".error-message");

    if (!errorElement) {
      const error = document.createElement("div");
      error.className = "error-message text-red-500 mt-1 text-sm";
      error.innerText = message;
      parentDiv.appendChild(error);
    } else {
      errorElement.innerText = message;
    }
  }

  function clearError(input) {
    const parentDiv = input.parentElement;
    const errorElement = parentDiv.querySelector(".error-message");
    if (errorElement) {
      parentDiv.removeChild(errorElement);
    }
  }

  function validateRadio(radioButtons) {
    for (const radio of radioButtons) {
      if (radio.checked) {
        return true;
      }
    }
    return false;
  }

  function validateInput() {
    let isValid = true;

    if (nameField.value.trim() === "") {
      showError(nameField, "Nama Siswa wajib diisi.");
      isValid = false;
    } else {
      clearError(nameField);
    }

    if (kelasField.value.trim() === "") {
      showError(kelasField, "Kelas wajib diisi.");
      isValid = false;
    } else {
      clearError(kelasField);
    }

    if (!validateRadio(jenisKelaminFields)) {
      showError(jenkelField, "Jenis kelamin wajib dipilih.");
      isValid = false;
    } else {
      clearError(jenkelField);
    }

    if (tglField.value.trim() === "") {
      showError(tglField, "Tanggal lahir wajib diisi.");
      isValid = false;
    } else {
      clearError(tglField);
    }

    if (pendidikanField.value.trim() === "-") {
      showError(pendidikanField, "Pendidikan terakhir wajib dipilih.");
      isValid = false;
    } else {
      clearError(pendidikanField);
    }

    if (jurusanField.value.trim() === "") {
      showError(jurusanField, "Jurusan wajib diisi.");
      isValid = false;
    } else {
      clearError(jurusanField);
    }

    return isValid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateInput()) {
      // Mendapatkan nilai dari input form
      const nama = nameField.value;
      const kelas = kelasField.value;
      const jenisKelamin = jenisKelaminFields[0].checked
        ? "Laki-laki"
        : "Perempuan";
      const tglLahir = tglField.value;
      const pendidikan = pendidikanField.value;
      const jurusan = jurusanField.value;

      // Membuat elemen baris tabel baru
      const newRow = document.createElement("tr");

      // Menambahkan data ke dalam baris
      newRow.innerHTML = `
        <td>${nama}</td>
        <td>${kelas}</td>
        <td>${jenisKelamin}</td>
        <td>${tglLahir}</td>
        <td>${pendidikan}</td>
        <td>${jurusan}</td>
      `;

      tableBody.appendChild(newRow);

      // Reset form setelah submit
      form.reset();
    } else {
      console.log("Form tidak valid, periksa kembali input Anda.");
    }
  });
});
