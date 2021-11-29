let notasAlumno: number[] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8];

function desaprobo(): void {
  let meses: String;

  let i: number;
  for (i = 0; i < notasAlumno.length; i++) {
    if (i === 0) {
      meses = "marzo";
    } else if (i === 1) {
      meses = "abril";
    } else if (i === 2) {
      meses = "mayo";
    } else if (i === 3) {
      meses = "junio";
    } else if (i === 4) {
      meses = "julio";
    } else if (i === 5) {
      meses = "agosto";
    } else if (i === 6) {
      meses = "septiembre";
    } else if (i === 7) {
      meses = "octubre";
    } else if (i === 8) {
      meses = "noviembre";
    } else if (i === 9) {
      meses = "diciembre";
    }

    if (notasAlumno[i] < 6) {
      console.log("en el mes de ", meses, "desaprobo con", notasAlumno[i]);
    }
  }
}

function notaMenor() {
  let meses: string;

  let menor: number = notasAlumno[0];
  for (let i = 0; i < notasAlumno.length; i++) {
    if (notasAlumno[i] < menor) {
      menor = notasAlumno[i];
      if (i === 0) {
        meses = "marzo";
      } else if (i === 1) {
        meses = "abril";
      } else if (i === 2) {
        meses = "mayo";
      } else if (i === 3) {
        meses = "junio";
      } else if (i === 4) {
        meses = "julio";
      } else if (i === 5) {
        meses = "agosto";
      } else if (i === 6) {
        meses = "septiembre";
      } else if (i === 7) {
        meses = "octubre";
      } else if (i === 8) {
        meses = "noviembre";
      } else if (i === 9) {
        meses = "diciembre";
      }
    }
  }

  console.log("en el mes de ", meses, "obtuvo la menor nota ", menor);
}

function notaMayor() {
  let meses: string;

  let mayor: number = notasAlumno[0];
  for (let i = 0; i < notasAlumno.length; i++) {
    if (notasAlumno[i] > mayor) {
      mayor = notasAlumno[i];
      if (i === 0) {
        meses = "marzo";
      } else if (i === 1) {
        meses = "abril";
      } else if (i === 2) {
        meses = "mayo";
      } else if (i === 3) {
        meses = "junio";
      } else if (i === 4) {
        meses = "julio";
      } else if (i === 5) {
        meses = "agosto";
      } else if (i === 6) {
        meses = "septiembre";
      } else if (i === 7) {
        meses = "octubre";
      } else if (i === 8) {
        meses = "noviembre";
      } else if (i === 9) {
        meses = "diciembre";
      }
    }
  }

  console.log("en el mes de ", meses, "obtuvo la mayor nota ", mayor);
}

function promedio(): void {
  let suma: number = 0;
  let prom: number = 0;
  for (let i: number = 0; i < notasAlumno.length; i++) {
    suma = suma + notasAlumno[i];
  }
  prom = suma / notasAlumno.length;
  console.log(" el promedio es ", prom);
}

desaprobo();
notaMenor();
notaMayor();
promedio();
