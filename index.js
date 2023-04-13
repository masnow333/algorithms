const insertSort = require('./insertSort');
const selectionSort = require('./selectionSort');
const shellSort = require('./shellSort');
const combSort = require('./combSort');

// const VALUES_TO_SORT = [9, 4, 7, 1, 5, 3, 8, 2, 6];

const VALUES_TO_SORT = [
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987, // Números decimales adicionales
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987,
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987,
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987,
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987, // Números decimales adicionales
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987,
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987,
    10.25, 25.5, 50.75, 100.123, 200.678, 500.987, 1000.234, 2000.789, 5000.567, // Números decimales ascendentes
    1.5, 2.75, 3.1, 4.8, 5.23, 6.6, 7.98, 8.34, 9.9,  // Números decimales
    10000, 20000, 30000, 40000, 50000, // Números grandes
    -10.5, -25.75, -50.12, -100.34, -200.89, -500.45, // Números decimales negativos
    15.75, 0.123, 78.6, -3.45, 250.987,
    9.9, 3.1, 7.98, 25.5 // Números decimales repetidos
  ];

insertSort(VALUES_TO_SORT)
selectionSort(VALUES_TO_SORT)
shellSort(VALUES_TO_SORT)
combSort(VALUES_TO_SORT)