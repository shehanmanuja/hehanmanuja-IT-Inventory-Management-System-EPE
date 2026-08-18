/**
 * IT INVENTORY MANAGEMENT SYSTEM - VANILLA JS (ES6+) ENGINE
 * Persistent LocalStorage Data Store & Interactive Dashboard
 */

// Initial Seed Mock Data based on actual enterprise inventory log
const INITIAL_MOCK_DATA = [
  // --- MONITORS (Page 1) ---
  { id: "M-EPE-001", tag: "M-EPE-001", category: "Monitor", name: "HP EliteDisplay E232 - 24 inch", serial: "CN464213F2", user: "Mr. Anuruddha", status: "In Use", price: "Rs 17,500.00", addedDate: "2026-07-08" },
  { id: "M-EPE-002", tag: "M-EPE-002", category: "Monitor", name: "HP EliteDisplay E232 - 24 inch", serial: "CN464213GV", user: "Mr. Sanjiy", status: "In Use", price: "Rs 17,500.00", addedDate: "2026-07-08" },
  { id: "M-EPE-003", tag: "M-EPE-003", category: "Monitor", name: "HP EliteDisplay E232 - 24 inch", serial: "CN464212P9", user: "Unassigned", status: "Available", price: "Rs 17,500.00", addedDate: "2026-07-08" },
  { id: "M-EPE-004", tag: "M-EPE-004", category: "Monitor", name: "HP E223 - 22inch", serial: "3CQ8521FBC", user: "Mr. Shehan", status: "In Use", price: "Rs 21,000.00", addedDate: "2026-07-08" },
  { id: "M-EPE-005", tag: "M-EPE-005", category: "Monitor", name: "Dell 23.6\" TN LCD", serial: "SE2417HG", user: "Unassigned", status: "Available", price: "Rs 15,000.00", addedDate: "2026-07-08" },
  { id: "M-EPE-006", tag: "M-EPE-006", category: "Monitor", name: "ACER RL272 - 24 inch", serial: "32550399147", user: "Mr. Renuka", status: "In Use", price: "Rs 49,000.00", addedDate: "2026-07-08" },
  { id: "M-EPE-007", tag: "M-EPE-007", category: "Monitor", name: "LG - FLATRONEX205 - 19 inch", serial: "110NDVTAR827", user: "Unassigned", status: "Available", price: "Rs 9,900.00", addedDate: "2026-07-08" },
  { id: "M-EPE-008", tag: "M-EPE-008", category: "Monitor", name: "LG - FLATRONEX205 - 19 inch", serial: "103NDBP4X381", user: "Unassigned", status: "Available", price: "Rs 9,900.00", addedDate: "2026-07-08" },
  { id: "M-EPE-009", tag: "M-EPE-009", category: "Monitor", name: "DELL P190SB - 17 inch", serial: "SN-0DHFBW-74261-055-30L", user: "Unassigned", status: "Available", price: "Rs 6,500.00", addedDate: "2026-07-08" },
  { id: "M-EPE-010", tag: "M-EPE-010", category: "Monitor", name: "HP 22ES - 21.5 inch", serial: "3CM702050L", user: "Mr. Shehan", status: "In Use", price: "Rs 23,000.00", addedDate: "2026-07-08" },
  { id: "M-EPE-011", tag: "M-EPE-011", category: "Monitor", name: "HP 22ES - 21.5 inch", serial: "3CM70204XX", user: "Mr. Shehan", status: "In Use", price: "Rs 23,000.00", addedDate: "2026-07-08" },
  { id: "M-EPE-012", tag: "M-EPE-012", category: "Monitor", name: "ACER RL272 - 24 inch", serial: "32550401147", user: "Mr. Chathura", status: "In Use", price: "Rs 49,000.00", addedDate: "2026-07-08" },
  { id: "M-EPE-013", tag: "M-EPE-013", category: "Monitor", name: "ACER RL272 - 24 inch", serial: "32550399547", user: "Mr. Danuke", status: "In Use", price: "Rs 49,000.00", addedDate: "2026-07-08" },
  { id: "M-EPE-014", tag: "M-EPE-014", category: "Monitor", name: "ESYS EXTREME EX2445W LED", serial: "07CXCNNF106283004", user: "Unassigned", status: "Available", price: "Rs 35,000.00", addedDate: "2026-07-08" },

  // --- ROUTERS & NETWORK (Page 1) ---
  { id: "R-EPE-001", tag: "R-EPE-001", category: "Router", name: "SLT Fiber Broadband", serial: "485754430E6887A8", user: "Office", status: "Available", price: "Rs 20,000.00", addedDate: "2026-07-08" },
  { id: "R-EPE-002", tag: "R-EPE-002", category: "Router", name: "Dialog Broadband", serial: "5108631180512997d2", user: "Office", status: "Available", price: "Rs 6,990.00", addedDate: "2026-07-08" },

  // --- WIFI CCTV (Page 1) ---
  { id: "C-EPE-001", tag: "C-EPE-001", category: "CCTV", name: "EZVIZ1080p - Cs-C6N", serial: "F96654354", user: "Office", status: "Available", price: "Rs 9,500.00", addedDate: "2026-07-08" },
  { id: "C-EPE-002", tag: "C-EPE-002", category: "CCTV", name: "WiFi Camera V380 Pro", serial: "C0921FDTARRE7", user: "Office", status: "Available", price: "Rs 6,500.00", addedDate: "2026-07-08" },
  { id: "C-EPE-003", tag: "C-EPE-003", category: "CCTV", name: "EZVIZ1080p - Cs-C6N", serial: "K29331163", user: "Office", status: "Available", price: "Rs 9,500.00", addedDate: "2026-07-08" },

  // --- FINGERPRINT SCAN (BIOMETRICS) (Page 1) ---
  { id: "F-EPE-001", tag: "F-EPE-001", category: "Peripherals", name: "ZKTeco Fingerprint Scanner", serial: "-", user: "Office", status: "In Use", price: "Rs 60,000.00", addedDate: "2026-07-08" },
  { id: "F-EPE-002", tag: "F-EPE-002", category: "Peripherals", name: "Hikvision-DS-K1T605MF", serial: "218472094", user: "Office", status: "Available", price: "Rs 11,000.00", addedDate: "2026-07-08", notes: "2026-07-08: Firmware updated to v2.4. Optical sensor cleaned during routine audit." },
  { id: "F-EPE-003", tag: "F-EPE-003", category: "Peripherals", name: "ZKTeco Biometric Terminal", serial: "-", user: "Office", status: "Available", price: "Rs 60,000.00", addedDate: "2026-07-08" },
  { id: "F-EPE-004", tag: "F-EPE-004", category: "Peripherals", name: "VIRDI AC-7001 Facial & Finger Scanner", serial: "-", user: "Office", status: "Available", price: "Rs 163,612.00", addedDate: "2026-07-08" },

  // --- CPU WORKSTATIONS (Page 1) ---
  { id: "CPU-LPL-001", tag: "CPU LPL 001", category: "CPU", name: "Intel Core i5-4590 | 8GB Ram | Windows 10 | SSD 256GB", serial: "-", user: "Unassigned", status: "Available", price: "Rs 40,000.00", addedDate: "2026-07-08" },
  { id: "CPU-EPE-002", tag: "CPU-EPE-002", category: "CPU", name: "Intel Core i3 / 60 | 4GB Ram | Windows 10 | SSD 120GB | 500GB HDD", serial: "-", user: "Unassigned", status: "Available", price: "Rs 26,000.00", addedDate: "2026-07-08" },
  { id: "CPU-LPL-003", tag: "CPU LPL 003", category: "CPU", name: "Intel Core i5-12400 | 8GB Ram | Windows 11 | HDD 1TB", serial: "-", user: "Mr. Chathura", status: "In Use", price: "Rs 70,000.00", addedDate: "2026-07-08" },
  { id: "CPU-EPE-004", tag: "CPU-EPE-004", category: "CPU", name: "Intel Core i5-12400 | 8GB Ram | Windows 11 | HDD 1TB", serial: "-", user: "Mr. Danuke", status: "In Use", price: "Rs 70,000.00", addedDate: "2026-07-08" },
  { id: "CPU-LPL-005", tag: "CPU LPL 005", category: "CPU", name: "Intel Core i5-7600K | 8GB Ram | Windows 10 | NVIDIA 1050Ti 4GB GPU | SSD 230GB | 1TB HDD", serial: "-", user: "Mr. Shehan", status: "In Use", price: "Rs 60,000.00", addedDate: "2026-07-08", notes: "2026-07-08: GPU thermal paste replaced & dual fans dusted. Stress test passed clean." },
  { id: "CPU-EPE-006", tag: "CPU-EPE-006", category: "CPU", name: "Intel Core i5-4590 | 8GB Ram | Windows 10 | SSD 150GB", serial: "-", user: "Unassigned", status: "Available", price: "Rs 30,000.00", addedDate: "2026-07-08" },
  { id: "CPU-LPL-007", tag: "CPU LPL 007", category: "CPU", name: "Intel Core i5-4570 | 8GB Ram | Windows 11 | SSD 120GB", serial: "-", user: "Mr. Sanjiy", status: "Available", price: "Rs 30,000.00", addedDate: "2026-07-08" },
  { id: "CPU-EPE-008", tag: "CPU-EPE-008", category: "CPU", name: "Intel Core i5-12500 | 16GB Ram | Windows 11 | HDD 1TB", serial: "-", user: "Unassigned", status: "Available", price: "Rs 80,000.00", addedDate: "2026-07-08" },

  // --- LAPTOPS (Page 1) ---
  { id: "LAP-EPE-001", tag: "LAP-EPE-001", category: "Laptop", name: "Lenovo V15 G3 IAP -Type 82TT | Intel Core i3-1215U | 8GB Ram | Windows 11 | 500GB HDD", serial: "PF4N5D03", user: "Mr. Khasan", status: "Available", price: "Rs 149,000.00", addedDate: "2026-07-08" },
  { id: "LAP-EPE-002", tag: "LAP EPE 002", category: "Laptop", name: "Lenovo V15 G3 W -Type 82TT | Intel Core i3 1215U | 8GB Ram | Windows 11 | 500GB HDD", serial: "PF4N71WK", user: "Mr. Renuka", status: "Available", price: "Rs 149,000.00", addedDate: "2026-07-08" },
  { id: "LAP-EPE-003", tag: "LAP-EPE-003", category: "Laptop", name: "HP Black | Intel Core i5 6th Gen | 8GB Ram | Windows 10 | 1TB HDD", serial: "CND62567CQ", user: "Ms. Tekshani", status: "Available", price: "Rs 60,000.00", addedDate: "2026-07-08" },
  { id: "LAP-EPE-004", tag: "LAP-EPE-004", category: "Laptop", name: "ASUS M580V Intel Core i7-7700HQ | 8GB Ram | 1TB HDD", serial: "H9N0CV10Y838387", user: "Mr. Savindu", status: "Available", price: "Rs 100,000.00", addedDate: "2026-07-08" },
  { id: "LAP-EPE-005", tag: "LAP-EPE-005", category: "Laptop", name: "ASUS P556U | Intel Core i5-6200 | 8GB Ram | 1TB Hard Disk | Windows 10", serial: "G7N0CV14Y874309", user: "Ms. Chamika", status: "Available", price: "Rs 70,000.00", addedDate: "2026-07-08" },
  { id: "LAP-EPE-006", tag: "LAP-EPE-006", category: "Laptop", name: "DELL Latitude E5550 | Intel Core i5-5 Gen | 8GB Ram | Hard Disk | Windows 10", serial: "7R6ZX52", user: "Ms. Shenara", status: "Available", price: "Rs 68,000.00", addedDate: "2026-07-08" },
  { id: "LAP-EPE-007", tag: "LAP-EPE-007", category: "Laptop", name: "LenovoThinkPad X1 Yoga (Touch) 16GB Ram | i7-7Gen | 240 SSD", serial: "1S20JES01U00R90Q6FTQ", user: "Mr. Anuruddha", status: "Available", price: "Rs 72,000.00", addedDate: "2026-07-08" },
  { id: "LAP-EPE-008", tag: "LAP-EPE-008", category: "Laptop", name: "LenovoThinkPad X1 Yoga i5 7th gen 8GB Ram 256SSD", serial: "208,284.002.178.00", user: "Unassigned", status: "Awaiting Repair", price: "Rs 55,000.00", addedDate: "2026-07-08", notes: "2026-07-08: Battery degradation & keyboard connector loose. Awaiting replacement battery pack & servicing." },
  { id: "LAP-EPE-013", tag: "LAP-EPE-013", category: "Laptop", name: "Dell Latitude 3189 | Pentium® | 4GB Ram | 64bit | 120GB HDD | Windows 10", serial: "J2062H2", user: "Unassigned", status: "Available", price: "Rs 40,000.00", addedDate: "2026-07-08" },

  // --- KEYBOARDS (Page 1) ---
  { id: "KEYB-EPE-001", tag: "KeyB-EPE-001", category: "Keyboard", name: "Helios Gaming Keyboard", serial: "-", user: "Mr. Shehan", status: "In Use", price: "Rs 3,700.00", addedDate: "2026-07-08" },
  { id: "KEYB-EPE-005", tag: "KeyB-EPE-005", category: "Keyboard", name: "Logitech Keyboard", serial: "-", user: "Mr. Renuka", status: "In Use", price: "Rs 9,000.00", addedDate: "2026-07-08" },
  { id: "KEYB-EPE-006", tag: "KeyB-EPE-006", category: "Keyboard", name: "Logitech Keyboard", serial: "-", user: "Mr. Chathura", status: "In Use", price: "Rs 9,000.00", addedDate: "2026-07-08" },
  { id: "KEYB-EPE-007", tag: "KeyB-EPE-007", category: "Keyboard", name: "Logitech Keyboard", serial: "-", user: "Mr. Danuke", status: "In Use", price: "Rs 9,000.00", addedDate: "2026-07-08" },
  { id: "KEYB-EPE-008", tag: "KeyB-EPE-008", category: "Keyboard", name: "Delux KA150 Keyboard", serial: "-", user: "Mr. Anuruddha", status: "In Use", price: "Rs 2,700.00", addedDate: "2026-07-08" },
  { id: "KEYB-EPE-009", tag: "KeyB-EPE-009", category: "Keyboard", name: "Dell Multimedia Keyboard", serial: "-", user: "Mr. Sanjiy", status: "Available", price: "Rs 1,500.00", addedDate: "2026-07-08" },

  // --- MICE (Page 1 & 2) ---
  { id: "MOUSE-EPE-001", tag: "M-EPE-001 (Mouse)", category: "Mouse", name: "Alcatroz Xplorer 550M", serial: "-", user: "Mr. Shehan", status: "In Use", price: "Rs 2,500.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-005", tag: "M-EPE-005 (Mouse)", category: "Mouse", name: "Logitech Optical Mouse", serial: "-", user: "Mr. Renuka", status: "In Use", price: "Rs 6,000.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-006", tag: "M-EPE-006 (Mouse)", category: "Mouse", name: "Logitech Optical Mouse", serial: "-", user: "Mr. Chathura", status: "In Use", price: "Rs 6,000.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-007", tag: "M-EPE-007 (Mouse)", category: "Mouse", name: "Logitech Optical Mouse", serial: "-", user: "Mr. Danuke", status: "In Use", price: "Rs 6,000.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-008", tag: "M-EPE-008 (Mouse)", category: "Mouse", name: "Dwm100 Mouse", serial: "-", user: "Mr. Anuruddha", status: "In Use", price: "Rs 1,100.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-012", tag: "M-EPE-012 (Mouse)", category: "Mouse", name: "Dell Optical Mouse", serial: "-", user: "Ms. Chamika", status: "In Use", price: "Rs 500.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-013", tag: "M-EPE-013 (Mouse)", category: "Mouse", name: "Dell Optical Mouse", serial: "-", user: "Ms. Shenara", status: "In Use", price: "Rs 500.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-014", tag: "M-EPE-014 (Mouse)", category: "Mouse", name: "Dell Optical Mouse", serial: "-", user: "Ms. Tekshani", status: "Available", price: "Rs 500.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-015", tag: "M-EPE-015 (Mouse)", category: "Mouse", name: "Dell Optical Mouse", serial: "-", user: "Mr. Sanjiy", status: "Available", price: "Rs 500.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-016", tag: "M-EPE-016 (Mouse)", category: "Mouse", name: "Dell Optical Mouse", serial: "-", user: "Mr. Savindu", status: "Available", price: "Rs 500.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-017", tag: "M-EPE-017 (Mouse)", category: "Mouse", name: "Dell Optical Mouse", serial: "-", user: "Unassigned", status: "Available", price: "Rs 500.00", addedDate: "2026-07-08" },
  { id: "MOUSE-EPE-018", tag: "M-EPE-018 (Mouse)", category: "Mouse", name: "A-Tech Mouse", serial: "-", user: "Unassigned", status: "Available", price: "Rs 500.00", addedDate: "2026-07-08" },

  // --- LAND LINE TELEPHONES (Page 2) ---
  { id: "LAN-EPE-001", tag: "LAN-EPE-001", category: "Land Line", name: "Alcatel T76-CE Black", serial: "804", user: "Mr. Chathura", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-002", tag: "LAN-EPE-002", category: "Land Line", name: "Alcatel T76-CE Black", serial: "803", user: "Mr. Danuke", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-003", tag: "LAN-EPE-003", category: "Land Line", name: "Alcatel T76-CE Black", serial: "805", user: "Mr. Anuruddha", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-004", tag: "LAN-EPE-004", category: "Land Line", name: "Alcatel T76-CE Black", serial: "806", user: "Mr. Renuka", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-005", tag: "LAN-EPE-005", category: "Land Line", name: "Alcatel T76-CE Black", serial: "808", user: "Mr. Sanjiy", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-006", tag: "LAN-EPE-006", category: "Land Line", name: "Alcatel T76-CE Black", serial: "811", user: "Mr. Shehan", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-007", tag: "LAN-EPE-007", category: "Land Line", name: "Alcatel T76-CE Black", serial: "801", user: "Ms. Tekshani", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-008", tag: "LAN-EPE-008", category: "Land Line", name: "Alcatel T76-CE Black", serial: "816", user: "Ms. Shenara", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-009", tag: "LAN-EPE-009", category: "Land Line", name: "Alcatel T76-CE Black", serial: "815", user: "Mr. Savindu", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-010", tag: "LAN-EPE-010", category: "Land Line", name: "Alcatel T76-CE Black", serial: "809", user: "Ms. Chamika", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-011", tag: "LAN-EPE-011", category: "Land Line", name: "Alcatel T76-CE Black", serial: "810", user: "Boardroom", status: "In Use", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-012", tag: "LAN-EPE-012", category: "Land Line", name: "Alcatel T76-CE Black", serial: "802", user: "P/A Room", status: "Available", price: "Rs 16,200.00", addedDate: "2026-07-08" },
  { id: "LAN-EPE-013", tag: "LAN-EPE-013", category: "Land Line", name: "Alcatel T76-CE Black", serial: "812", user: "Unassigned", status: "Awaiting Repair", price: "Rs 16,200.00", addedDate: "2026-07-08" },

  // --- PRINTERS & 3D PRINTERS (Page 2) ---
  { id: "P-EPE-001", tag: "P-EPE-001", category: "Printer", name: "Xerox J-B132 Multifunction Printer", serial: "898E4562", user: "Office", status: "In Use", price: "Rent", addedDate: "2026-07-08" },
  { id: "P-EPE-002", tag: "P-EPE-002", category: "Printer", name: "Canon-F175000 Laser Printer", serial: "2JM24937", user: "Office", status: "In Use", price: "Rs 150,000.00", addedDate: "2026-07-08" },
  { id: "P-EPE-003", tag: "P-EPE-003", category: "Printer", name: "Toshiba e-Studio2508A Commercial Copier", serial: "DP-2508A", user: "Office", status: "In Use", price: "Rent", addedDate: "2026-07-08" },
  { id: "P-EPE-004", tag: "P-EPE-004", category: "Printer", name: "CREALITY 3D Printer (S399)", serial: "cx4bxzy8742ff7f1", user: "Office", status: "In Use", price: "Rs 180,830.00", addedDate: "2026-07-08" },
  { id: "P-EPE-005", tag: "P-EPE-005", category: "Printer", name: "CREALITY 3D Printer", serial: "1000D5348D0G123HVCC", user: "Office", status: "In Use", price: "Rs 180,830.00", addedDate: "2026-07-08" },

  // --- AIR CONDITIONERS (Page 2) ---
  { id: "AC-EPE-001", tag: "AC-EPE-001", category: "Air Conditioner", name: "COMFRI 01 Inverter AC", serial: "-", user: "Office", status: "In Use", price: "Rs 200,000.00", addedDate: "2026-07-08" },
  { id: "AC-EPE-002", tag: "AC-EPE-002", category: "Air Conditioner", name: "COMFRI 02 Inverter AC", serial: "-", user: "Boardroom", status: "In Use", price: "Rs 160,000.00", addedDate: "2026-07-08" },
  { id: "AC-EPE-003", tag: "AC-EPE-003", category: "Air Conditioner", name: "COMFRI 03 Inverter AC", serial: "-", user: "Director's Office", status: "In Use", price: "Rs 160,000.00", addedDate: "2026-07-08" },
  { id: "AC-EPE-004", tag: "AC-EPE-004", category: "Air Conditioner", name: "COMFRI 04 Heavy Duty AC", serial: "-", user: "Office", status: "In Use", price: "Rs 300,000.00", addedDate: "2026-07-08" },
  { id: "AC-EPE-005", tag: "AC-EPE-005", category: "Air Conditioner", name: "COMFRI 05 Inverter AC", serial: "-", user: "Office", status: "In Use", price: "Rs 160,000.00", addedDate: "2026-07-08" },
  { id: "AC-EPE-006", tag: "AC-EPE-006", category: "Air Conditioner", name: "TCL-TAC-09CSA/XA61", serial: "-", user: "P/A Room", status: "In Use", price: "Rs 150,000.00", addedDate: "2026-07-08" },
  { id: "AC-EPE-007", tag: "AC-EPE-007", category: "Air Conditioner", name: "TCL-TAC-09CSA/XA62", serial: "-", user: "Server Room", status: "In Use", price: "Rs 150,000.00", addedDate: "2026-07-08" },

  // --- UPS POWER (Page 2) ---
  { id: "UPS-EPE-001", tag: "UPS-EPE-001", category: "UPS", name: "UPS Prolink - PRO701SFC", serial: "-", user: "Mr. Chathura", status: "In Use", price: "Rs 9,500.00", addedDate: "2026-07-08" },
  { id: "UPS-EPE-002", tag: "UPS-EPE-002", category: "UPS", name: "UPS Prolink - PRO701SFC", serial: "-", user: "Mr. Danuke", status: "In Use", price: "Rs 9,500.00", addedDate: "2026-07-08" },
  { id: "UPS-EPE-003", tag: "UPS-EPE-003", category: "UPS", name: "UPS Prolink - PRO1201SFC", serial: "-", user: "Mr. Anuruddha", status: "In Use", price: "Rs 9,500.00", addedDate: "2026-07-08" },
  { id: "UPS-EPE-004", tag: "UPS-EPE-004", category: "UPS", name: "UPS Prolink - PRO1201SFC", serial: "-", user: "Mr. Shehan", status: "In Use", price: "Rs 16,500.00", addedDate: "2026-07-08" },
  { id: "UPS-EPE-005", tag: "UPS-EPE-005", category: "UPS", name: "UPS Prolink - PRO1201SFC", serial: "-", user: "Mr. Renuka", status: "In Use", price: "Rs 16,500.00", addedDate: "2026-07-08" },
  { id: "UPS-EPE-006", tag: "UPS-EPE-006", category: "UPS", name: "UPS Prolink - PRO1201SFC", serial: "-", user: "Unassigned", status: "Available", price: "Rs 9,500.00", addedDate: "2026-07-08" },

  // --- USB PEN DRIVES (Page 2) ---
  { id: "PEN-EPE-001", tag: "PEN-EPE-001", category: "USB Pen Drive", name: "MI 2TB High Speed Flash Drive", serial: "-", user: "Mr. Shehan", status: "In Use", price: "Rs 4,500.00", addedDate: "2026-07-08" },
  { id: "PEN-EPE-002", tag: "PEN-EPE-002", category: "USB Pen Drive", name: "Kingston-Black 4GB", serial: "-", user: "Unassigned", status: "Not Working", price: "Rs 550.00", addedDate: "2026-07-08" },
  { id: "PEN-EPE-003", tag: "PEN-EPE-003", category: "USB Pen Drive", name: "Silver Pen 64GB", serial: "-", user: "Mr. Anuruddha", status: "In Use", price: "Rs 2,000.00", addedDate: "2026-07-08" },
  { id: "PEN-EPE-004", tag: "PEN-EPE-004", category: "USB Pen Drive", name: "Silver Pen 64GB", serial: "-", user: "Mr. Chathura", status: "In Use", price: "Rs 2,000.00", addedDate: "2026-07-08" },
  { id: "PEN-EPE-005", tag: "PEN-EPE-005", category: "USB Pen Drive", name: "Silver Pen 32GB", serial: "-", user: "Office", status: "In Use", price: "Rs 1,500.00", addedDate: "2026-07-08" },
  { id: "PEN-EPE-006", tag: "PEN-EPE-006", category: "USB Pen Drive", name: "SanDisk 64GB", serial: "-", user: "Ms. Tekshani", status: "In Use", price: "Rs 2,000.00", addedDate: "2026-07-08" },

  // --- SMART TV (Page 2) ---
  { id: "TV-EPE-001", tag: "TV-EPE-001", category: "Smart TV", name: "NPC LED TV 65\" inch 4K", serial: "02372110001DL65N18H010084", user: "Office", status: "In Use", price: "Rs 480,390.00", addedDate: "2026-07-08" },
  { id: "TV-EPE-002", tag: "TV-EPE-002", category: "Smart TV", name: "NPC LED TV 55\" inch 4K", serial: "-", user: "Office", status: "In Use", price: "Rs 229,990.00", addedDate: "2026-07-08" },

  // --- WIFI ADAPTERS (Page 2) ---
  { id: "WIFI-A-EPE-001", tag: "WIFI-A-EPE-001", category: "Peripherals", name: "LB-Link WiFi Dongle 150Mbps", serial: "-", user: "Unassigned", status: "Available", price: "Rs 1,300.00", addedDate: "2026-07-08" },
  { id: "WIFI-A-EPE-002", tag: "WIFI-A-EPE-002", category: "Peripherals", name: "LB-Link WiFi Dongle 150Mbps", serial: "-", user: "Unassigned", status: "Available", price: "Rs 1,300.00", addedDate: "2026-07-08" },
  { id: "WIFI-A-EPE-003", tag: "WIFI-A-EPE-003", category: "Peripherals", name: "LB-Link WiFi Dongle 150Mbps", serial: "-", user: "Unassigned", status: "Available", price: "Rs 1,300.00", addedDate: "2026-07-08" },
  { id: "WIFI-A-EPE-004", tag: "WIFI-A-EPE-004", category: "Peripherals", name: "LB-Link WiFi Dongle 150Mbps", serial: "-", user: "Unassigned", status: "Available", price: "Rs 1,300.00", addedDate: "2026-07-08" },
  { id: "WIFI-A-EPE-005", tag: "WIFI-A-EPE-005", category: "Peripherals", name: "LB-Link WiFi Dongle 150Mbps", serial: "-", user: "Unassigned", status: "Available", price: "Rs 1,300.00", addedDate: "2026-07-08" },
  { id: "WIFI-A-EPE-006", tag: "WIFI-A-EPE-006", category: "Peripherals", name: "TP-Link USB Wireless Adapter", serial: "TL-WN727N", user: "Mr. Shehan", status: "In Use", price: "Rs 4,200.00", addedDate: "2026-07-08" },
  { id: "WIFI-A-EPE-007", tag: "WIFI-A-EPE-007", category: "Peripherals", name: "TP-Link USB Wireless Adapter", serial: "-", user: "Ms. Tekshani", status: "In Use", price: "Rs 3,700.00", addedDate: "2026-07-08" },

  // --- PERIPHERALS & ACCESSORIES (Bottom Page 2) ---
  { id: "HDMI-EPE-001", tag: "HDMI-EPE-001", category: "Peripherals", name: "Baseus - 4K Wireless Display Dongle Adapter", serial: "709,696,540,449.00", user: "P/A Room", status: "In Use", price: "Rs 27,000.00", addedDate: "2026-07-08" },
  { id: "TVBOX-EPE-002", tag: "TVBOX-EPE-002", category: "Peripherals", name: "set Top Box - DQ08 4K Media Player", serial: "2BBX3-R3", user: "Boardroom", status: "In Use", price: "Rs 8,200.00", addedDate: "2026-07-08" },
  { id: "SPEAKER-EPE-003", tag: "SPEAKER-EPE-003", category: "Peripherals", name: "Dual Normal Speaker Set", serial: "-", user: "Office", status: "In Use", price: "Rs 1,200.00", addedDate: "2026-07-08" },
  { id: "PEO-TV-EPE-004", tag: "PEO TV-EPE-004", category: "Peripherals", name: "PEO TV Go Setup Box", serial: "2,105,007,802,219.00", user: "Boardroom", status: "In Use", price: "Rs 6,990.00", addedDate: "2026-07-08" },
  { id: "PEO-TV-EPE-005", tag: "PEO TV-EPE-005", category: "Peripherals", name: "PEO TV Go Setup Box", serial: "2,105,007,802,219.00", user: "Office", status: "In Use", price: "Rs 6,990.00", addedDate: "2026-07-08" },
  { id: "HDMI-EPE-006", tag: "HDMI-EPE-006", category: "Peripherals", name: "Wireless HDMI Extender Transmitter & Receiver", serial: "400367864", user: "Office", status: "In Use", price: "Rs 24,100.00", addedDate: "2026-07-08" },
  { id: "DVD-EPE-007", tag: "DVD-EPE-007", category: "Peripherals", name: "SDRW-08D2S-U LITE External DVD Drive", serial: "H1DOAP020412", user: "Mr. Chathura", status: "In Use", price: "Rs 5,900.00", addedDate: "2026-07-08" },
  { id: "CT-EPE-008", tag: "CT-EPE-008", category: "Peripherals", name: "PoE & LAN Cable Tester [Proskit]", serial: "M1-7063", user: "Mr. Shehan", status: "In Use", price: "Rs 7,000.00", addedDate: "2026-07-08" }
];

// App State & History Engine
let inventoryItems = [];
let currentBase64FormImage = "";
let historyStack = [];
let redoStack = [];
const MAX_HISTORY = 50;
let currentTheme = "dark";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadInventoryData();
  initOperatorProfile();
  setupLiveClock();
  setupSidebarToggle();
  setupTabNavigation();
  setupFiltersAndSearch();
  setupCustomImageSlots();
  setupModalForm();
  setupQuickNoteModal();
  setupShareModal();
  setupHistoryAndSaveHandlers();
  setupSettingsHandlers();
  setupQuickTasks();
  setupCalendarWidget();
  setupGlobalSearch();
  renderAll();
});

/* ==========================================================================
   THEME TOGGLE ENGINE (DARK & LIGHT MODE)
   ========================================================================== */
function initTheme() {
  setTheme("dark");
}

function setTheme(theme = "dark") {
  currentTheme = "dark";
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("it_inventory_theme", "dark");
}

function toggleTheme() {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  showToast(`Switched to ${nextTheme === "dark" ? "Dark" : "Light"} Theme.`);
}

function updateThemeToggleUI() {
  const label = document.getElementById("theme-toggle-label");
  const sunIcon = document.querySelector("#theme-toggle-btn .sun-icon");
  const moonIcon = document.querySelector("#theme-toggle-btn .moon-icon");

  if (currentTheme === "light") {
    if (label) label.textContent = "Light";
    if (sunIcon) sunIcon.style.display = "none";
    if (moonIcon) moonIcon.style.display = "inline-block";
  } else {
    if (label) label.textContent = "Dark";
    if (sunIcon) sunIcon.style.display = "inline-block";
    if (moonIcon) moonIcon.style.display = "none";
  }
}

/* ==========================================================================
   HISTORY (UNDO / REDO) & SAVE ENGINE
   ========================================================================== */
function pushHistoryState(actionDescription = "Action performed") {
  historyStack.push({
    items: JSON.parse(JSON.stringify(inventoryItems)),
    desc: actionDescription
  });
  if (historyStack.length > MAX_HISTORY) {
    historyStack.shift();
  }
  redoStack = [];
  markUnsavedState(true);
  updateHistoryButtons();
}

function undo() {
  if (historyStack.length === 0) return;

  redoStack.push({
    items: JSON.parse(JSON.stringify(inventoryItems)),
    desc: "Redo action"
  });

  const lastState = historyStack.pop();
  inventoryItems = lastState.items;
  saveInventoryData(false);
  renderAll();
  updateHistoryButtons();
  showToast(`Undid action: ${lastState.desc}`);
}

function redo() {
  if (redoStack.length === 0) return;

  historyStack.push({
    items: JSON.parse(JSON.stringify(inventoryItems)),
    desc: "Undo action"
  });

  const nextState = redoStack.pop();
  inventoryItems = nextState.items;
  saveInventoryData(false);
  renderAll();
  updateHistoryButtons();
  showToast("Redid last action.");
}

function updateHistoryButtons() {
  const undoBtn = document.getElementById("header-undo-btn");
  const redoBtn = document.getElementById("header-redo-btn");

  if (undoBtn) undoBtn.disabled = historyStack.length === 0;
  if (redoBtn) redoBtn.disabled = redoStack.length === 0;
}

function markUnsavedState(unsaved) {
  const saveBtn = document.getElementById("header-save-btn");
  const saveText = document.getElementById("save-status-text");

  if (saveBtn && saveText) {
    if (unsaved) {
      saveBtn.classList.add("unsaved");
      saveText.textContent = "Save *";
    } else {
      saveBtn.classList.remove("unsaved");
      saveText.textContent = "Save";
    }
  }
}

function manualSave() {
  saveInventoryData(true);
  markUnsavedState(false);
  showToast("Inventory state saved to local storage!");
}

function setupHistoryAndSaveHandlers() {
  const undoBtn = document.getElementById("header-undo-btn");
  const redoBtn = document.getElementById("header-redo-btn");
  const saveBtn = document.getElementById("header-save-btn");

  if (undoBtn) undoBtn.addEventListener("click", undo);
  if (redoBtn) redoBtn.addEventListener("click", redo);
  if (saveBtn) saveBtn.addEventListener("click", manualSave);

  // Global Keyboard Shortcuts (Ctrl+Z, Ctrl+Y, Ctrl+S)
  window.addEventListener("keydown", (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
    if (activeTag === "input" || activeTag === "textarea" || activeTag === "select") {
      if (e.key === "Escape") closeAssetModal();
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) {
        redo();
      } else {
        undo();
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
      e.preventDefault();
      redo();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      manualSave();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "n") {
      e.preventDefault();
      openAssetModal();
    }
  });
}

/* ==========================================================================
   LOCAL STORAGE ENGINE
   ========================================================================== */
function loadInventoryData() {
  const stored = localStorage.getItem("it_inventory_items");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length >= 100) {
        inventoryItems = parsed;
      } else {
        inventoryItems = [...INITIAL_MOCK_DATA];
        saveInventoryData(false);
      }
    } catch (e) {
      inventoryItems = [...INITIAL_MOCK_DATA];
      saveInventoryData(false);
    }
  } else {
    inventoryItems = [...INITIAL_MOCK_DATA];
    saveInventoryData(false);
  }
}

function saveInventoryData(showToastAlert = false) {
  localStorage.setItem("it_inventory_items", JSON.stringify(inventoryItems));
  if (showToastAlert) {
    markUnsavedState(false);
  }
}

/* ==========================================================================
   REAL-TIME CLOCK
   ========================================================================== */
/* ==========================================================================
   REAL-TIME CLOCK & DIGITAL HERO WIDGET
   ========================================================================== */
function setupLiveClock() {
  const clockEl = document.getElementById("realtime-clock");
  const heroClockEl = document.getElementById("hero-clock-display");
  const weatherDateEl = document.getElementById("hero-weather-date");

  function tick() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    if (clockEl) clockEl.textContent = timeStr;

    if (heroClockEl) {
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const formattedHours = String(hours).padStart(2, '0');
      heroClockEl.innerHTML = `${formattedHours}:${minutes}:${seconds} <span class="ampm">${ampm}</span>`;
    }

    if (weatherDateEl) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      weatherDateEl.textContent = now.toLocaleDateString('en-US', options);
    }
  }
  tick();
  setInterval(tick, 1000);
}

/* ==========================================================================
   INTERACTIVE QUICK TASKS ENGINE
   ========================================================================== */
let quickTasksList = [
  { id: 1, text: "test", completed: false },
  { id: 2, text: "Set up repository structure", completed: false },
  { id: 3, text: "Draft project requirements", completed: false },
  { id: 4, text: "Audit network router firmware", completed: true },
  { id: 5, text: "Verify server rack backup UPS", completed: true },
  { id: 6, text: "Assign monitors to dev team", completed: true }
];
let currentTaskFilter = "active";

function setupQuickTasks() {
  const savedTasks = localStorage.getItem("aniq_quick_tasks");
  if (savedTasks) {
    try {
      quickTasksList = JSON.parse(savedTasks);
    } catch (e) { }
  }

  const activeTabBtn = document.getElementById("task-filter-active");
  const completedTabBtn = document.getElementById("task-filter-completed");
  const addBtn = document.getElementById("task-add-submit-btn");
  const inputField = document.getElementById("task-input-field");

  if (activeTabBtn) {
    activeTabBtn.addEventListener("click", () => {
      currentTaskFilter = "active";
      activeTabBtn.classList.add("active");
      if (completedTabBtn) completedTabBtn.classList.remove("active");
      renderQuickTasks();
    });
  }

  if (completedTabBtn) {
    completedTabBtn.addEventListener("click", () => {
      currentTaskFilter = "completed";
      completedTabBtn.classList.add("active");
      if (activeTabBtn) activeTabBtn.classList.remove("active");
      renderQuickTasks();
    });
  }

  if (addBtn && inputField) {
    const handleAddTask = () => {
      const val = inputField.value.trim();
      if (!val) return;
      quickTasksList.push({
        id: Date.now(),
        text: val,
        completed: false
      });
      inputField.value = "";
      saveQuickTasks();
      renderQuickTasks();
      showToast("Quick task added!");
    };

    addBtn.addEventListener("click", handleAddTask);
    inputField.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleAddTask();
    });
  }

  renderQuickTasks();
}

function saveQuickTasks() {
  localStorage.setItem("aniq_quick_tasks", JSON.stringify(quickTasksList));
}

function renderQuickTasks() {
  const container = document.getElementById("quick-tasks-container");
  const activeTabBtn = document.getElementById("task-filter-active");
  const completedTabBtn = document.getElementById("task-filter-completed");

  const activeCount = quickTasksList.filter(t => !t.completed).length;
  const completedCount = quickTasksList.filter(t => t.completed).length;

  if (activeTabBtn) activeTabBtn.textContent = `Active (${activeCount})`;
  if (completedTabBtn) completedTabBtn.textContent = `Completed (${completedCount})`;

  if (!container) return;

  const filtered = quickTasksList.filter(t => currentTaskFilter === "active" ? !t.completed : t.completed);

  if (filtered.length === 0) {
    container.innerHTML = `<li style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.8rem;">No ${currentTaskFilter} tasks.</li>`;
    return;
  }

  container.innerHTML = filtered.map(t => `
    <li class="task-item ${t.completed ? 'completed' : ''}">
      <label class="task-item-label">
        <input type="checkbox" class="task-checkbox" ${t.completed ? 'checked' : ''} onchange="toggleQuickTask(${t.id})">
        <span class="task-text">${escapeHtml(t.text)}</span>
      </label>
      <button class="task-delete-btn" onclick="deleteQuickTask(${t.id})" title="Delete task">✕</button>
    </li>
  `).join('');
}

window.toggleQuickTask = function(id) {
  const task = quickTasksList.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveQuickTasks();
    renderQuickTasks();
  }
};

window.deleteQuickTask = function(id) {
  quickTasksList = quickTasksList.filter(t => t.id !== id);
  saveQuickTasks();
  renderQuickTasks();
};

/* ==========================================================================
   INTERACTIVE CALENDAR ENGINE
   ========================================================================== */
let calCurrentYear = 2025;
let calCurrentMonth = 10; // November (0-indexed 10)
let calSelectedDay = 15;

function setupCalendarWidget() {
  const prevBtn = document.getElementById("cal-prev-btn");
  const nextBtn = document.getElementById("cal-next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      calCurrentMonth--;
      if (calCurrentMonth < 0) {
        calCurrentMonth = 11;
        calCurrentYear--;
      }
      renderCalendar();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      calCurrentMonth++;
      if (calCurrentMonth > 11) {
        calCurrentMonth = 0;
        calCurrentYear++;
      }
      renderCalendar();
    });
  }

  renderCalendar();
}

function renderCalendar() {
  const container = document.getElementById("calendar-days-container");
  const assetsContainer = document.getElementById("calendar-assets-container");
  const titleEl = document.getElementById("cal-month-year-text");
  const subtextEl = document.getElementById("cal-selected-subtext");

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  if (titleEl) {
    titleEl.textContent = `${monthNames[calCurrentMonth]} ${calCurrentYear}`;
  }

  if (subtextEl) {
    const selectedDateObj = new Date(calCurrentYear, calCurrentMonth, calSelectedDay);
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][selectedDateObj.getDay()];
    subtextEl.textContent = `${dayName}, ${monthNames[calCurrentMonth]} ${calSelectedDay}, ${calCurrentYear}`;
  }

  if (container) {
    const firstDayIndex = new Date(calCurrentYear, calCurrentMonth, 1).getDay();
    const lastDate = new Date(calCurrentYear, calCurrentMonth + 1, 0).getDate();
    const prevLastDate = new Date(calCurrentYear, calCurrentMonth, 0).getDate();

    let html = dayNames.map(d => `<div class="calendar-day-head">${d}</div>`).join('');

    // Previous month trailing days
    for (let x = firstDayIndex; x > 0; x--) {
      html += `<div class="calendar-day-cell muted">${prevLastDate - x + 1}</div>`;
    }

    // Current month days
    for (let i = 1; i <= lastDate; i++) {
      const isActive = i === calSelectedDay ? 'active' : '';
      const dateStr = `${calCurrentYear}-${String(calCurrentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const hasAssets = inventoryItems.some(item => item.addedDate === dateStr);
      const eventClass = hasAssets ? 'has-events' : '';
      
      html += `<div class="calendar-day-cell ${isActive} ${eventClass}" onclick="selectCalendarDay(${i})" title="${hasAssets ? 'Assets registered on this date' : 'Select date'}">${i}</div>`;
    }

    // Next month leading days
    const totalSlots = firstDayIndex + lastDate;
    const remaining = (7 - (totalSlots % 7)) % 7;
    for (let j = 1; j <= remaining; j++) {
      html += `<div class="calendar-day-cell muted">${j}</div>`;
    }

    container.innerHTML = html;
  }

  // Render Selected Date Asset Showcase
  if (assetsContainer) {
    const selectedDateStr = `${calCurrentYear}-${String(calCurrentMonth + 1).padStart(2, '0')}-${String(calSelectedDay).padStart(2, '0')}`;
    const matchingItems = inventoryItems.filter(item => item.addedDate === selectedDateStr);

    if (matchingItems.length > 0) {
      let cardsHtml = `
        <div style="font-size:0.78rem; font-weight:700; color:var(--text-secondary); margin-bottom:0.4rem; display:flex; justify-content:space-between; align-items:center;">
          <span>📦 Registered Assets (${matchingItems.length}):</span>
          <span style="font-size:0.72rem; color:var(--accent-cyan); font-weight:600;">${monthNames[calCurrentMonth]} ${calSelectedDay}</span>
        </div>
      `;
      cardsHtml += matchingItems.map(item => `
        <div class="cal-asset-card" onclick="viewAssetDetails('${item.id}')" title="Click to view details for ${escapeHtml(item.tag)}">
          <div class="cal-asset-info">
            <span class="cal-asset-tag">${escapeHtml(item.tag)}</span>
            <span class="cal-asset-name">${escapeHtml(item.name)}</span>
          </div>
          <span class="status-pill ${getStatusClass(item.status)}" style="font-size:0.68rem; padding: 2px 7px;">
            ${escapeHtml(item.status)}
          </span>
        </div>
      `).join('');

      assetsContainer.innerHTML = cardsHtml;
    } else {
      assetsContainer.innerHTML = `
        <div class="cal-no-assets">
          <span>No items registered on ${monthNames[calCurrentMonth]} ${calSelectedDay}, ${calCurrentYear}.</span>
          <button type="button" class="btn-secondary" style="margin-top:0.5rem; font-size:0.75rem; padding:4px 10px; width:100%; justify-content:center; color:var(--accent-cyan); border-color:rgba(0,255,157,0.3);" onclick="openAssetModalForDate('${selectedDateStr}')">
            + Register Asset for this Date
          </button>
        </div>
      `;
    }
  }
}

window.selectCalendarDay = function(day) {
  calSelectedDay = day;
  renderCalendar();
};

window.openAssetModalForDate = function(dateStr) {
  openAssetModal();
  const dateInput = document.getElementById("form-date");
  if (dateInput) dateInput.value = dateStr;
};

/* ==========================================================================
   GLOBAL SEARCH & CTRL+K HANDLER
   ========================================================================== */
function setupGlobalSearch() {
  const globalInput = document.getElementById("global-search-input");
  const mainSearchInput = document.getElementById("search-input");

  if (globalInput) {
    globalInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (mainSearchInput) mainSearchInput.value = val;
      switchTab("inventory-view");
      renderAll();
    });
  }

  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (globalInput) {
        globalInput.focus();
        globalInput.select();
      }
    }
  });
}

function setupSidebarToggle() {
  const toggleBtn = document.getElementById("sidebar-toggle-btn");
  const container = document.querySelector(".app-container");
  if (toggleBtn && container) {
    toggleBtn.addEventListener("click", () => {
      container.classList.toggle("sidebar-collapsed");
    });
  }
}

/* ==========================================================================
   TAB SWITCHING NAVIGATION
   ========================================================================== */
function setupTabNavigation() {
  const navItems = document.querySelectorAll("#nav-menu .nav-item[data-tab]");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Add Item Buttons Listeners
  ["header-add-item-btn", "dashboard-add-item-btn", "fab-add-item-btn", "add-asset-btn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => openAssetModal());
    }
  });

  // Sidebar & Troubleshoot Header Add Note Button Listeners
  ["sidebar-add-note-btn", "troubleshoot-add-note-btn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => openQuickNoteModal());
    }
  });
}

function switchTab(tabId) {
  // Update sidebar active states
  document.querySelectorAll("#nav-menu .nav-item").forEach(el => {
    if (el.getAttribute("data-tab") === tabId) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  // Update tab visibility
  document.querySelectorAll(".tab-content").forEach(content => {
    if (content.id === tabId) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  if (tabId === "reports-view") {
    renderReportsCharts();
  }
}

/* ==========================================================================
   PRICE PARSING & VALUATION CALCULATIONS
   ========================================================================== */
function parsePriceNumber(priceStr) {
  if (!priceStr) return 0;
  const cleanStr = String(priceStr).replace(/[^0-9.]/g, '');
  const val = parseFloat(cleanStr);
  return isNaN(val) ? 0 : val;
}

function calculateTotalInventoryValue(itemsList = inventoryItems) {
  return itemsList.reduce((sum, item) => sum + parsePriceNumber(item.price), 0);
}

function formatCurrency(amount) {
  return "Rs " + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* ==========================================================================
   STATS CALCULATIONS & RENDERING
   ========================================================================== */
function updateQuickStats() {
  const total = inventoryItems.length;
  const assigned = inventoryItems.filter(item => item.status === "In Use" || item.status === "Assigned").length;
  const available = inventoryItems.filter(item => item.status === "Available").length;
  const maintenance = inventoryItems.filter(item => item.status === "Awaiting Repair" || item.status === "In Repair" || item.status === "Not Working").length;
  const totalValuation = calculateTotalInventoryValue(inventoryItems);

  document.getElementById("stat-total").textContent = total;
  document.getElementById("stat-assigned").textContent = assigned;
  document.getElementById("stat-available").textContent = available;
  document.getElementById("stat-maintenance").textContent = maintenance;
  const valEl = document.getElementById("stat-valuation");
  if (valEl) valEl.textContent = formatCurrency(totalValuation);
}

/* ==========================================================================
   SEARCH & FILTERING LOGIC
   ========================================================================== */
function setupFiltersAndSearch() {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const statusFilter = document.getElementById("status-filter");
  const sortFilter = document.getElementById("sort-filter");

  if (searchInput) searchInput.addEventListener("input", renderInventoryTable);
  if (categoryFilter) categoryFilter.addEventListener("change", renderInventoryTable);
  if (statusFilter) statusFilter.addEventListener("change", renderInventoryTable);
  if (sortFilter) sortFilter.addEventListener("change", renderInventoryTable);

  const addBtn = document.getElementById("add-asset-btn");
  if (addBtn) addBtn.addEventListener("click", () => openAssetModal());

  const exportBtn = document.getElementById("export-csv-btn");
  if (exportBtn) exportBtn.addEventListener("click", exportToCSV);
}

function getFilteredItems() {
  const searchVal = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  const categoryVal = document.getElementById("category-filter")?.value || "ALL";
  const statusVal = document.getElementById("status-filter")?.value || "ALL";
  const sortVal = document.getElementById("sort-filter")?.value || "category";

  let filtered = inventoryItems.filter(item => {
    // Search match
    const matchesSearch = !searchVal || 
      item.tag.toLowerCase().includes(searchVal) ||
      item.name.toLowerCase().includes(searchVal) ||
      (item.serial && item.serial.toLowerCase().includes(searchVal)) ||
      (item.user && item.user.toLowerCase().includes(searchVal));

    // Category match
    const matchesCategory = categoryVal === "ALL" || item.category === categoryVal;

    // Status match
    let matchesStatus = true;
    if (statusVal === "In Use") {
      matchesStatus = item.status === "In Use" || item.status === "Assigned";
    } else if (statusVal === "Awaiting Repair") {
      matchesStatus = item.status === "Awaiting Repair" || item.status === "In Repair";
    } else if (statusVal !== "ALL") {
      matchesStatus = item.status === statusVal;
    }

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sort items neatly
  filtered.sort((a, b) => {
    if (sortVal === "category") {
      const catCompare = (a.category || "").localeCompare(b.category || "");
      if (catCompare !== 0) return catCompare;
      return (a.tag || "").localeCompare(b.tag || "");
    } else if (sortVal === "tag") {
      return (a.tag || "").localeCompare(b.tag || "");
    } else if (sortVal === "name") {
      return (a.name || "").localeCompare(b.name || "");
    } else if (sortVal === "status") {
      return (a.status || "").localeCompare(b.status || "");
    }
    return 0;
  });

  return filtered;
}

/* ==========================================================================
   TABLE RENDERING
   ========================================================================== */
function renderAll() {
  updateQuickStats();
  renderInventoryTable();
  renderTroubleshootLog();
  renderRecentAssetsOverview();
  renderReportsCharts();
  renderCalendar();
}

function renderTroubleshootLog() {
  const tbody = document.getElementById("troubleshoot-tbody");
  if (!tbody) return;

  const items = inventoryItems.filter(item => {
    const hasNotes = item.notes && item.notes.trim().length > 0;
    const isRepairOrBroken = item.status === "Awaiting Repair" || item.status === "Not Working";
    return hasNotes || isRepairOrBroken;
  });

  if (items.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding: 2rem; color: var(--text-muted);">
          <div>No active IT maintenance or troubleshoot notes recorded.</div>
          <button type="button" class="btn-primary" style="margin-top:0.65rem; font-size:0.78rem; display:inline-flex;" onclick="openQuickNoteModal()">+ Add Maintenance Note</button>
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = items.map(item => {
    const statusClass = getStatusClass(item.status);
    const noteText = item.notes ? escapeHtml(item.notes) : "<em style='color:var(--text-muted);'>No troubleshoot notes logged yet.</em>";
    return `
      <tr>
        <td style="font-family: monospace; font-weight: bold; color: var(--accent-cyan);">${escapeHtml(item.tag)}</td>
        <td>
          <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(item.name)}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Serial: ${escapeHtml(item.serial || 'N/A')}</div>
        </td>
        <td>${getCategorySvgInline(item.category, 14)} ${escapeHtml(item.category)}</td>
        <td><span class="status-pill ${statusClass}"><span class="status-dot"></span>${escapeHtml(item.status)}</span></td>
        <td>${escapeHtml(item.user || 'Unassigned')}</td>
        <td style="max-width: 320px; font-size: 0.85rem; line-height: 1.4; white-space: pre-wrap;">${noteText}</td>
        <td style="text-align: right;">
          <div style="display:flex; gap:0.4rem; justify-content:flex-end; align-items:center;">
            <button type="button" class="btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.65rem;" onclick="viewAssetDetails('${item.id}')" title="View / Edit Repair Log">
              🛠️ View / Edit
            </button>
            <button type="button" class="btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.65rem; color: #fbbf24; border-color: rgba(245, 158, 11, 0.4);" onclick="clearTroubleshootLog('${item.id}')" title="Clear Troubleshoot Notes & Remove from Log">
              🧹 Clear Log
            </button>
            <button type="button" class="btn-icon-action delete" style="padding:0.35rem 0.5rem; background:rgba(239,68,68,0.15); border-color:rgba(239,68,68,0.3); color:#f87171;" onclick="deleteAsset('${item.id}')" title="Delete Asset Completely">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </td>
      </tr>`;
  }).join('');
}

function renderInventoryTable() {
  const tbody = document.getElementById("inventory-tbody");
  if (!tbody) return;

  const items = getFilteredItems();
  const showingText = document.getElementById("showing-count-text");
  if (showingText) showingText.textContent = `Showing ${items.length} of ${inventoryItems.length} assets`;

  const filteredValuation = calculateTotalInventoryValue(items);
  const filteredPriceEl = document.getElementById("filtered-total-price");
  if (filteredPriceEl) filteredPriceEl.textContent = `Filtered Total Value: ${formatCurrency(filteredValuation)}`;

  if (items.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding: 2.5rem; color: var(--text-muted);">
          No matching hardware assets found. Try adjusting search or filters.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = items.map(item => {
    const statusClass = getStatusClass(item.status);
    const thumbSrc = item.image ? item.image : getCategoryPlaceholderIcon(item.category);

    return `
      <tr>
        <td>
          <img class="asset-thumb" src="${thumbSrc}" alt="${escapeHtml(item.name)}" style="cursor:pointer;" onclick="viewAssetDetails('${item.id}')" title="Click to view details">
        </td>
        <td>
          <span class="asset-id-code" style="cursor:pointer;" onclick="viewAssetDetails('${item.id}')" title="Click to view details">${escapeHtml(item.tag)}</span>
        </td>
        <td>
          <div class="item-name-cell" style="cursor:pointer;" onclick="viewAssetDetails('${item.id}')" title="Click to view details">
            <span style="color:var(--text-primary); border-bottom: 1px dashed rgba(0, 255, 157, 0.4);">${escapeHtml(item.name)}</span>
            ${item.serial ? `<span class="serial-no">S/N: ${escapeHtml(item.serial)}</span>` : ''}
          </div>
        </td>
        <td>
          <span class="category-tag">${getCategorySvgInline(item.category, 14)} ${escapeHtml(item.category)}</span>
        </td>
        <td>
          <span class="status-pill ${statusClass}">
            <span class="status-dot"></span>
            ${escapeHtml(item.status)}
          </span>
        </td>
        <td>
          <span class="user-assigned-cell">${escapeHtml(item.user || 'Unassigned')}</span>
        </td>
        <td>
          <span style="font-weight:600; color:var(--text-secondary);">${escapeHtml(item.price || '-')}</span>
        </td>
        <td style="text-align: right;">
          <div class="table-actions" style="justify-content: flex-end;">
            <button type="button" class="btn-icon-action view" title="View Details" onclick="viewAssetDetails('${item.id}')" style="border-color: rgba(0, 255, 157, 0.4); color: var(--accent-cyan);">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button type="button" class="btn-icon-action edit" title="Edit Asset" onclick="editAsset('${item.id}')">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
            <button type="button" class="btn-icon-action delete" title="Delete Asset" onclick="deleteAsset('${item.id}')">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderRecentAssetsOverview() {
  const tbody = document.getElementById("recent-assets-tbody");
  if (!tbody) return;

  const recent = [...inventoryItems].slice(0, 5);
  tbody.innerHTML = recent.map(item => {
    const statusClass = getStatusClass(item.status);
    const thumbSrc = item.image ? item.image : getCategoryPlaceholderIcon(item.category);

    return `
      <tr style="cursor:pointer;" onclick="viewAssetDetails('${item.id}')" title="Click to view details">
        <td>
          <img class="asset-thumb" src="${thumbSrc}" alt="${escapeHtml(item.name)}">
        </td>
        <td><span class="asset-id-code">${escapeHtml(item.tag)}</span></td>
        <td><div class="item-name-cell">${escapeHtml(item.name)}</div></td>
        <td><span class="category-tag">${getCategorySvgInline(item.category, 14)} ${escapeHtml(item.category)}</span></td>
        <td><span class="status-pill ${statusClass}"><span class="status-dot"></span>${escapeHtml(item.status)}</span></td>
        <td><span class="user-assigned-cell">${escapeHtml(item.user || 'Unassigned')}</span></td>
      </tr>
    `;
  }).join('');
}

function getStatusClass(status) {
  switch (status) {
    case "Available": return "available";
    case "In Use":
    case "Assigned": return "in-use";
    case "Awaiting Repair":
    case "In Repair": return "awaiting-repair";
    case "Not Working": return "not-working";
    default: return "available";
  }
}

function getCategorySvgDetails(cat) {
  const normCat = (cat || "").toLowerCase();
  
  if (normCat.includes("laptop")) {
    return {
      path: `<rect x='2' y='4' width='20' height='12' rx='2'/><path d='M2 20h20'/><line x1='12' y1='16' x2='12' y2='20'/>`,
      color: "#38bdf8",
      colorEscaped: "%2338bdf8"
    };
  } else if (normCat.includes("monitor") || normCat.includes("display")) {
    return {
      path: `<rect x='2' y='3' width='20' height='14' rx='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/>`,
      color: "#00f2fe",
      colorEscaped: "%2300f2fe"
    };
  } else if (normCat.includes("cpu") || normCat.includes("pc") || normCat.includes("workstation")) {
    return {
      path: `<rect x='5' y='2' width='14' height='20' rx='2'/><line x1='9' y1='6' x2='15' y2='6'/><line x1='9' y1='10' x2='11' y2='10'/><circle cx='12' cy='16' r='1.5'/>`,
      color: "#6366f1",
      colorEscaped: "%236366f1"
    };
  } else if (normCat.includes("router") || normCat.includes("wifi") || normCat.includes("network") || normCat.includes("broadband")) {
    return {
      path: `<rect x='2' y='14' width='20' height='8' rx='2'/><path d='M6 14V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6'/><line x1='12' y1='2' x2='12' y2='6'/><circle cx='6' cy='18' r='1'/><circle cx='10' cy='18' r='1'/>`,
      color: "#8b5cf6",
      colorEscaped: "%238b5cf6"
    };
  } else if (normCat.includes("printer")) {
    return {
      path: `<polyline points='6 9 6 2 18 2 18 9'/><path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'/><rect x='6' y='14' width='12' height='8'/>`,
      color: "#ec4899",
      colorEscaped: "%23ec4899"
    };
  } else if (normCat.includes("cctv") || normCat.includes("camera") || normCat.includes("security")) {
    return {
      path: `<path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'/><circle cx='12' cy='13' r='4'/>`,
      color: "#10b981",
      colorEscaped: "%2310b981"
    };
  } else if (normCat.includes("ups") || normCat.includes("power") || normCat.includes("battery")) {
    return {
      path: `<rect x='1' y='6' width='18' height='12' rx='2'/><line x1='23' y1='10' x2='23' y2='14'/><polyline points='11 9 8 13 11 13 9 17'/>`,
      color: "#f59e0b",
      colorEscaped: "%23f59e0b"
    };
  } else if (normCat.includes("keyboard")) {
    return {
      path: `<rect x='2' y='6' width='20' height='12' rx='2'/><line x1='6' y1='10' x2='6' y2='10'/><line x1='10' y1='10' x2='10' y2='10'/><line x1='14' y1='10' x2='14' y2='10'/><line x1='18' y1='10' x2='18' y2='10'/><line x1='8' y1='14' x2='16' y2='14'/>`,
      color: "#38bdf8",
      colorEscaped: "%2338bdf8"
    };
  } else if (normCat.includes("mouse")) {
    return {
      path: `<rect x='6' y='3' width='12' height='18' rx='6'/><line x1='12' y1='3' x2='12' y2='9'/>`,
      color: "#a855f7",
      colorEscaped: "%23a855f7"
    };
  } else if (normCat.includes("land line") || normCat.includes("phone")) {
    return {
      path: `<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'/>`,
      color: "#34d399",
      colorEscaped: "%2334d399"
    };
  } else if (normCat.includes("air conditioner") || normCat.includes("ac") || normCat.includes("appliance")) {
    return {
      path: `<line x1='12' y1='2' x2='12' y2='22'/><line x1='2' y1='12' x2='22' y2='12'/><line x1='4.93' y1='4.93' x2='19.07' y2='19.07'/><line x1='19.07' y1='4.93' x2='4.93' y2='19.07'/>`,
      color: "#38bdf8",
      colorEscaped: "%2338bdf8"
    };
  } else if (normCat.includes("usb") || normCat.includes("pen drive") || normCat.includes("storage")) {
    return {
      path: `<path d='M6 10h12v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10z'/><path d='M9 2h6v8H9z'/><line x1='11' y1='5' x2='11' y2='5'/><line x1='13' y1='5' x2='13' y2='5'/>`,
      color: "#f43f5e",
      colorEscaped: "%23f43f5e"
    };
  } else if (normCat.includes("tv") || normCat.includes("smart tv")) {
    return {
      path: `<rect x='2' y='3' width='20' height='13' rx='2'/><polyline points='17 21 12 16 7 21'/>`,
      color: "#00f2fe",
      colorEscaped: "%2300f2fe"
    };
  } else {
    return {
      path: `<path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/><polyline points='3.27 6.96 12 12.01 20.73 6.96'/><line x1='12' y1='22.08' x2='12' y2='12'/>`,
      color: "#94a3b8",
      colorEscaped: "%2394a3b8"
    };
  }
}

function getCategoryPlaceholderIcon(cat) {
  const details = getCategorySvgDetails(cat);
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 24 24' fill='none' stroke='${details.colorEscaped}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>${details.path}</svg>`;
}

function getCategorySvgInline(cat, size = 14) {
  const details = getCategorySvgDetails(cat);
  return `<svg viewBox='0 0 24 24' width='${size}' height='${size}' fill='none' stroke='${details.color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>${details.path}</svg>`;
}

/* ==========================================================================
   CUSTOM IMAGE CONTAINER SLOTS (id="custom-img-1" and id="custom-img-2")
   ========================================================================== */
function setupCustomImageSlots() {
  const slot1Img = document.getElementById("custom-img-1");
  const slot2Img = document.getElementById("custom-img-2");
  const input1 = document.getElementById("input-slot-1");
  const input2 = document.getElementById("input-slot-2");

  if (!input1 && !input2) return;

  // Load saved custom slot 1 image if available
  const savedSlot1 = localStorage.getItem("custom_img_slot_1");
  if (savedSlot1 && slot1Img) {
    slot1Img.src = savedSlot1;
    document.getElementById("slot-1-filename").textContent = "User Uploaded Topology (Custom Image 1)";
  }

  // Load saved custom slot 2 image if available
  const savedSlot2 = localStorage.getItem("custom_img_slot_2");
  if (savedSlot2 && slot2Img) {
    slot2Img.src = savedSlot2;
    document.getElementById("slot-2-filename").textContent = "User Uploaded Inspection (Custom Image 2)";
  }

  // Input 1 Handler
  if (input1) {
    input1.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const base64 = evt.target.result;
          if (slot1Img) slot1Img.src = base64;
          localStorage.setItem("custom_img_slot_1", base64);
          document.getElementById("slot-1-filename").textContent = file.name;
          showToast("Custom Image Slot #1 updated successfully!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Input 2 Handler
  if (input2) {
    input2.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const base64 = evt.target.result;
          if (slot2Img) slot2Img.src = base64;
          localStorage.setItem("custom_img_slot_2", base64);
          document.getElementById("slot-2-filename").textContent = file.name;
          showToast("Custom Image Slot #2 updated successfully!");
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

/* ==========================================================================
   MODAL FORM & CRUD ACTIONS
   ========================================================================== */
function setupModalForm() {
  const modal = document.getElementById("asset-modal");
  const closeX = document.getElementById("modal-close-x");
  const cancelBtn = document.getElementById("modal-cancel-btn");
  const form = document.getElementById("asset-form");
  const imageInput = document.getElementById("form-image-input");

  if (closeX) closeX.addEventListener("click", closeAssetModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeAssetModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAssetModal();
    });
  }

  if (imageInput) {
    imageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          currentBase64FormImage = evt.target.result;
          const previewBox = document.getElementById("form-img-preview-box");
          if (previewBox) {
            previewBox.innerHTML = `<img src="${currentBase64FormImage}" alt="Preview">`;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      saveAssetFromForm();
    });
  }
}

function openAssetModal(editId = null) {
  const modal = document.getElementById("asset-modal");
  const title = document.getElementById("modal-title");
  const hiddenId = document.getElementById("form-asset-id-hidden");
  const tagInput = document.getElementById("form-asset-tag");
  const categorySelect = document.getElementById("form-category");
  const nameInput = document.getElementById("form-item-name");
  const serialInput = document.getElementById("form-serial");
  const statusSelect = document.getElementById("form-status");
  const userInput = document.getElementById("form-user");
  const priceInput = document.getElementById("form-price");
  const previewBox = document.getElementById("form-img-preview-box");

  currentBase64FormImage = "";
  if (previewBox) {
    previewBox.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
  }

  if (editId) {
    const item = inventoryItems.find(i => i.id === editId);
    if (!item) return;

    if (title) title.textContent = "Edit Hardware Asset";
    if (hiddenId) hiddenId.value = item.id;
    if (tagInput) tagInput.value = item.tag;
    if (categorySelect) categorySelect.value = item.category;
    if (nameInput) nameInput.value = item.name;
    if (serialInput) serialInput.value = item.serial || "";
    if (statusSelect) statusSelect.value = item.status;
    if (userInput) userInput.value = item.user || "";
    if (priceInput) priceInput.value = item.price || "";
    if (notesInput) notesInput.value = item.notes || "";
    const dateInput = document.getElementById("form-date");
    if (dateInput) dateInput.value = item.addedDate || new Date().toISOString().slice(0, 10);
    
    if (item.image) {
      currentBase64FormImage = item.image;
      if (previewBox) previewBox.innerHTML = `<img src="${item.image}" alt="Preview">`;
    }
  } else {
    if (title) title.textContent = "Add New Hardware Asset";
    if (hiddenId) hiddenId.value = "";
    document.getElementById("asset-form")?.reset();
    if (tagInput) tagInput.value = generateNextAssetTag();
    const dateInput = document.getElementById("form-date");
    if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);
  }

  if (modal) modal.classList.add("active");
}

function closeAssetModal() {
  const modal = document.getElementById("asset-modal");
  if (modal) modal.classList.remove("active");
}

/* ==========================================================================
   SIDEBAR TOGGLE & COLLAPSE LOGIC
   ========================================================================== */
function setupSidebarToggle() {
  const toggleBtn = document.getElementById("sidebar-toggle-btn");
  const appContainer = document.querySelector(".app-container");

  // Load saved sidebar collapse state
  const isCollapsed = localStorage.getItem("sidebar_collapsed") === "true";
  if (isCollapsed && appContainer) {
    appContainer.classList.add("sidebar-collapsed");
  }

  if (toggleBtn && appContainer) {
    toggleBtn.addEventListener("click", () => {
      appContainer.classList.toggle("sidebar-collapsed");
      const collapsedNow = appContainer.classList.contains("sidebar-collapsed");
      localStorage.setItem("sidebar_collapsed", collapsedNow);
      showToast(collapsedNow ? "Sidebar collapsed to icon mode." : "Sidebar expanded to full view.");
    });
  }
}

/* ==========================================================================
   QUICK NOTE & PHOTO ATTACHMENT MODAL
   ========================================================================== */
let currentBase64NoteImage = "";

function setupQuickNoteModal() {
  const modal = document.getElementById("quick-note-modal");
  const closeX = document.getElementById("note-modal-close-x");
  const cancelBtn = document.getElementById("note-modal-cancel-btn");
  const form = document.getElementById("quick-note-form");
  const imageInput = document.getElementById("note-image-input");

  if (closeX) closeX.addEventListener("click", closeQuickNoteModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeQuickNoteModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeQuickNoteModal();
    });
  }

  if (imageInput) {
    imageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          currentBase64NoteImage = evt.target.result;
          const previewBox = document.getElementById("note-img-preview-box");
          if (previewBox) {
            previewBox.innerHTML = `<img src="${currentBase64NoteImage}" alt="Note Photo Preview">`;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      saveQuickNoteFromForm();
    });
  }
}

window.openQuickNoteModal = function(preselectedAssetId = null) {
  const modal = document.getElementById("quick-note-modal");
  const assetSelect = document.getElementById("note-asset-select");
  const descInput = document.getElementById("note-description-input");
  const previewBox = document.getElementById("note-img-preview-box");

  currentBase64NoteImage = "";
  if (descInput) descInput.value = "";
  if (previewBox) {
    previewBox.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
  }

  // Populate Asset Select Dropdown
  if (assetSelect) {
    assetSelect.innerHTML = inventoryItems.map(i => `
      <option value="${i.id}" ${preselectedAssetId === i.id ? 'selected' : ''}>
        [${escapeHtml(i.tag)}] ${escapeHtml(i.name)} (${escapeHtml(i.category)})
      </option>
    `).join('');
  }

  if (modal) modal.classList.add("active");
};

function closeQuickNoteModal() {
  const modal = document.getElementById("quick-note-modal");
  if (modal) modal.classList.remove("active");
}

function saveQuickNoteFromForm() {
  const assetId = document.getElementById("note-asset-select").value;
  const noteType = document.getElementById("note-type-select").value;
  const statusVal = document.getElementById("note-status-select").value;
  const descText = document.getElementById("note-description-input").value.trim();

  if (!assetId || !descText) {
    alert("Please select an asset and enter a description note.");
    return;
  }

  const item = inventoryItems.find(i => i.id === assetId);
  if (!item) return;

  const dateStr = new Date().toISOString().slice(0, 10);
  const formattedNote = `[${dateStr} - ${noteType}] ${descText}`;

  pushHistoryState(`Add maintenance note to ${item.tag}`);

  // Append note to item
  if (item.notes && item.notes.trim().length > 0) {
    item.notes = `${formattedNote}\n${item.notes}`;
  } else {
    item.notes = formattedNote;
  }

  // Update status if selected
  if (statusVal && statusVal !== "NO_CHANGE") {
    item.status = statusVal;
  }

  // Attach photo to asset gallery & main image if present
  if (currentBase64NoteImage) {
    if (!item.gallery) item.gallery = [];
    item.gallery.push(currentBase64NoteImage);
    if (!item.image) {
      item.image = currentBase64NoteImage;
    }
  }

  saveInventoryData(false);
  closeQuickNoteModal();
  showToast(`Maintenance note & photo logged for asset ${item.tag}!`);
  renderAll();
}

/* ==========================================================================
   OPERATOR PROFILE & SHARE SYSTEM MODAL
   ========================================================================== */
function initOperatorProfile() {
  const savedName = localStorage.getItem("operator_name") || "Shehan Jayasinghe";
  const savedRole = localStorage.getItem("operator_role") || "IT Executive";

  const nameEl = document.getElementById("display-operator-name");
  const roleEl = document.getElementById("display-operator-role");
  const nameInput = document.getElementById("operator-name-input");
  const roleInput = document.getElementById("operator-role-input");

  if (nameEl) nameEl.textContent = savedName;
  if (roleEl) roleEl.textContent = savedRole;
  if (nameInput) nameInput.value = savedName;
  if (roleInput) roleInput.value = savedRole;
}

function setupShareModal() {
  const modal = document.getElementById("share-modal");
  const openBtn = document.getElementById("header-share-btn");
  const profileBadge = document.getElementById("header-profile-badge");
  const closeX = document.getElementById("share-modal-close-x");
  const closeBtn = document.getElementById("share-modal-close-btn");
  const copyBtn = document.getElementById("copy-share-code-btn");
  const loadBtn = document.getElementById("load-share-code-btn");
  const saveProfileBtn = document.getElementById("save-operator-profile-btn");

  function openShareModal() {
    initOperatorProfile();
    const codeInput = document.getElementById("share-code-input");
    if (codeInput) {
      try {
        const jsonStr = JSON.stringify(inventoryItems);
        codeInput.value = btoa(unescape(encodeURIComponent(jsonStr)));
      } catch (e) {
        codeInput.value = "";
      }
    }
    if (modal) modal.classList.add("active");
  }

  function closeShareModal() {
    if (modal) modal.classList.remove("active");
  }

  if (openBtn) openBtn.addEventListener("click", openShareModal);
  if (profileBadge) profileBadge.addEventListener("click", openShareModal);
  if (closeX) closeX.addEventListener("click", closeShareModal);
  if (closeBtn) closeBtn.addEventListener("click", closeShareModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeShareModal();
    });
  }

  // Copy Share Code Button
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const codeInput = document.getElementById("share-code-input");
      if (codeInput && codeInput.value) {
        navigator.clipboard.writeText(codeInput.value).then(() => {
          showToast("Share Code copied to clipboard! Send this code to your colleague.");
        }).catch(() => {
          codeInput.select();
          document.execCommand("copy");
          showToast("Share Code copied to clipboard!");
        });
      }
    });
  }

  // Load & Sync Share Code Button
  if (loadBtn) {
    loadBtn.addEventListener("click", () => {
      const pasteInput = document.getElementById("paste-share-code-input");
      if (!pasteInput || !pasteInput.value.trim()) {
        alert("Please paste a Share Code received from your collaborator.");
        return;
      }

      try {
        const decodedStr = decodeURIComponent(escape(atob(pasteInput.value.trim())));
        const parsedData = JSON.parse(decodedStr);

        if (!Array.isArray(parsedData)) {
          alert("Invalid Share Code format.");
          return;
        }

        if (confirm(`Sync inventory data from collaborator containing ${parsedData.length} items? This will replace your local state.`)) {
          pushHistoryState(`Sync data from collaborator (${parsedData.length} items)`);
          inventoryItems = parsedData;
          saveInventoryData(false);
          pasteInput.value = "";
          closeShareModal();
          showToast(`Inventory synced! Received ${parsedData.length} items.`);
          renderAll();
        }
      } catch (err) {
        alert("Failed to parse Share Code. Please make sure you pasted the complete code.");
      }
    });
  }

  // Save Operator Profile Button
  if (saveProfileBtn) {
    saveProfileBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("operator-name-input");
      const roleInput = document.getElementById("operator-role-input");

      const newName = nameInput ? nameInput.value.trim() : "";
      const newRole = roleInput ? roleInput.value.trim() : "";

      if (!newName) {
        alert("Please enter an operator name.");
        return;
      }

      localStorage.setItem("operator_name", newName);
      localStorage.setItem("operator_role", newRole || "IT Operations");
      initOperatorProfile();
      showToast(`Active operator set to: ${newName}`);
      closeShareModal();
    });
  }
}

function generateNextAssetTag() {
  const nextNum = inventoryItems.length + 1;
  return `AST-EPE-${String(nextNum).padStart(3, '0')}`;
}

function saveAssetFromForm() {
  const hiddenId = document.getElementById("form-asset-id-hidden").value;
  const tag = document.getElementById("form-asset-tag").value.trim();
  const category = document.getElementById("form-category").value;
  const name = document.getElementById("form-item-name").value.trim();
  const serial = document.getElementById("form-serial").value.trim();
  const status = document.getElementById("form-status").value;
  const user = document.getElementById("form-user").value.trim();
  const price = document.getElementById("form-price").value.trim();
  const notes = document.getElementById("form-notes")?.value.trim() || "";
  const addedDate = document.getElementById("form-date")?.value || new Date().toISOString().slice(0, 10);

  if (!tag || !name) {
    alert("Please fill in the required fields (Asset Tag & Item Name).");
    return;
  }

  if (hiddenId) {
    // Edit existing
    const idx = inventoryItems.findIndex(i => i.id === hiddenId);
    if (idx !== -1) {
      pushHistoryState(`Edit asset ${tag}`);
      inventoryItems[idx] = {
        ...inventoryItems[idx],
        tag,
        category,
        name,
        serial,
        status,
        user: user || "Unassigned",
        price: price || "-",
        notes,
        addedDate,
        image: currentBase64FormImage || inventoryItems[idx].image
      };
      showToast(`Asset ${tag} updated successfully.`);
    }
  } else {
    // Create new
    pushHistoryState(`Add asset ${tag}`);
    const newAsset = {
      id: "ID-" + Date.now(),
      tag,
      category,
      name,
      serial,
      status,
      user: user || "Unassigned",
      price: price || "-",
      notes,
      addedDate,
      image: currentBase64FormImage,
      gallery: []
    };
    inventoryItems.unshift(newAsset);
    showToast(`Asset ${tag} registered successfully.`);
  }

  saveInventoryData(false);
  closeAssetModal();
  renderAll();
}

window.editAsset = function(id) {
  openAssetModal(id);
};

window.deleteAsset = function(id) {
  const item = inventoryItems.find(i => i.id === id);
  if (!item) return;

  if (confirm(`Are you sure you want to delete asset ${item.tag} (${item.name})?`)) {
    pushHistoryState(`Delete asset ${item.tag}`);
    inventoryItems = inventoryItems.filter(i => i.id !== id);
    saveInventoryData(false);
    showToast(`Asset ${item.tag} deleted.`);
    renderAll();
  }
};

window.clearTroubleshootLog = function(id) {
  const item = inventoryItems.find(i => i.id === id);
  if (!item) return;

  if (confirm(`Clear troubleshoot notes for ${item.tag} (${item.name})? This will remove it from the Troubleshoot Log.`)) {
    pushHistoryState(`Clear troubleshoot notes for ${item.tag}`);
    item.notes = "";
    if (item.status === "Awaiting Repair" || item.status === "In Repair") {
      item.status = "Available";
    }
    saveInventoryData(false);
    showToast(`Troubleshoot log cleared for ${item.tag}.`);
    renderAll();
  }
};

/* ==========================================================================
   ASSET DETAILS VIEW MODAL LOGIC & GALLERY
   ========================================================================== */
let activeDetailAssetId = null;

function closeAssetDetailsModal() {
  const modal = document.getElementById("asset-details-modal");
  if (modal) modal.classList.remove("active");
}

function renderDetailsGallery(item) {
  const galleryList = document.getElementById("details-gallery-list");
  if (!galleryList) return;

  let images = [];
  if (item.image) images.push(item.image);
  if (item.gallery && Array.isArray(item.gallery)) {
    images = images.concat(item.gallery);
  }
  images = [...new Set(images)];

  if (images.length === 0) {
    images.push(getCategoryPlaceholderIcon(item.category));
  }

  galleryList.innerHTML = images.map((imgSrc, idx) => `
    <img class="asset-thumb ${idx === 0 ? 'active' : ''}" src="${imgSrc}" alt="Gallery photo ${idx + 1}" style="width:38px; height:38px; cursor:pointer;" onclick="switchDetailsMainImg('${imgSrc}', this)">
  `).join('');
}

window.switchDetailsMainImg = function(src, el) {
  const mainImg = document.getElementById("details-main-img");
  if (mainImg) mainImg.src = src;
};

window.viewAssetDetails = function(id) {
  const item = inventoryItems.find(i => i.id === id);
  if (!item) return;

  activeDetailAssetId = id;
  const modal = document.getElementById("asset-details-modal");
  const closeX = document.getElementById("details-modal-close-x");

  if (closeX) closeX.onclick = closeAssetDetailsModal;
  if (modal) {
    modal.onclick = (e) => { if (e.target === modal) closeAssetDetailsModal(); };
  }

  document.getElementById("details-asset-tag").textContent = item.tag;
  document.getElementById("details-item-name").textContent = item.name;
  document.getElementById("details-category").innerHTML = `${getCategorySvgInline(item.category, 16)} ${escapeHtml(item.category)}`;
  
  const statusClass = getStatusClass(item.status);
  document.getElementById("details-status").innerHTML = `<span class="status-pill ${statusClass}"><span class="status-dot"></span>${escapeHtml(item.status)}</span>`;
  
  document.getElementById("details-user").textContent = item.user || "Unassigned";
  document.getElementById("details-serial").textContent = item.serial || "N/A";
  document.getElementById("details-date").textContent = item.addedDate || new Date().toISOString().slice(0, 10);
  document.getElementById("details-price").textContent = item.price || "-";

  // Troubleshoot Notes Display
  const notesDisplay = document.getElementById("details-notes-display");
  const notesBadge = document.getElementById("details-notes-status-badge");
  if (notesDisplay) {
    notesDisplay.textContent = item.notes && item.notes.trim().length > 0 ? item.notes : "No maintenance notes recorded yet.";
  }
  if (notesBadge) {
    notesBadge.textContent = item.notes && item.notes.trim().length > 0 ? "Log Active" : "Clean";
    notesBadge.className = item.notes && item.notes.trim().length > 0 ? "badge text-xs status-pill in-use" : "badge text-xs status-pill available";
  }

  // Troubleshoot Add Note Button Handler
  const saveNoteBtn = document.getElementById("details-save-note-btn");
  const addNoteInput = document.getElementById("details-add-note-input");

  if (saveNoteBtn && addNoteInput) {
    addNoteInput.value = "";
    saveNoteBtn.onclick = () => {
      const noteVal = addNoteInput.value.trim();
      if (!noteVal) return;
      
      const timeStamp = new Date().toISOString().slice(0, 10);
      const formattedNote = `[${timeStamp}] ${noteVal}`;
      
      pushHistoryState(`Add repair note to ${item.tag}`);
      if (item.notes && item.notes.trim().length > 0) {
        item.notes = `${formattedNote}\n${item.notes}`;
      } else {
        item.notes = formattedNote;
      }
      
      saveInventoryData(false);
      addNoteInput.value = "";
      if (notesDisplay) notesDisplay.textContent = item.notes;
      if (notesBadge) {
        notesBadge.textContent = "Log Active";
        notesBadge.className = "badge text-xs status-pill in-use";
      }
      showToast(`Troubleshoot note saved for ${item.tag}`);
      renderAll();
    };
  }

  const clearNotesBtn = document.getElementById("details-clear-notes-btn");
  if (clearNotesBtn) {
    clearNotesBtn.onclick = () => {
      if (!item.notes || item.notes.trim().length === 0) {
        showToast("No maintenance notes to clear.");
        return;
      }
      if (confirm(`Clear troubleshoot notes for ${item.tag}?`)) {
        pushHistoryState(`Clear repair notes for ${item.tag}`);
        item.notes = "";
        if (item.status === "Awaiting Repair" || item.status === "In Repair") {
          item.status = "Available";
        }
        saveInventoryData(false);
        showToast(`Troubleshoot notes cleared.`);
        closeAssetDetailsModal();
        renderAll();
      }
    };
  }

  // Main Image
  const mainImg = document.getElementById("details-main-img");
  const defaultSrc = item.image ? item.image : getCategoryPlaceholderIcon(item.category);
  mainImg.src = defaultSrc;

  renderDetailsGallery(item);

  // Bind Buttons inside Details Modal
  const editBtn = document.getElementById("details-edit-btn");
  if (editBtn) {
    editBtn.onclick = () => {
      closeAssetDetailsModal();
      openAssetModal(id);
    };
  }

  const printBtn = document.getElementById("details-print-btn");
  if (printBtn) {
    printBtn.onclick = () => printAssetSpecTag(item);
  }

  // Gallery Photo Upload Input
  const photoInput = document.getElementById("details-add-photo-input");
  if (photoInput) {
    photoInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const base64 = evt.target.result;
          if (!item.gallery) item.gallery = [];
          item.gallery.push(base64);
          saveInventoryData();
          renderDetailsGallery(item);
          mainImg.src = base64;
          showToast("Photo added to asset gallery.");
        };
        reader.readAsDataURL(file);
      }
    };
  }

  if (modal) modal.classList.add("active");
};

function closeAssetDetailsModal() {
  const modal = document.getElementById("asset-details-modal");
  if (modal) modal.classList.remove("active");
}

function renderDetailsGallery(item) {
  const galleryList = document.getElementById("details-gallery-list");
  if (!galleryList) return;

  const images = [];
  if (item.image) images.push(item.image);
  if (item.gallery && Array.isArray(item.gallery)) {
    item.gallery.forEach(img => { if (img && !images.includes(img)) images.push(img); });
  }

  if (images.length === 0) {
    images.push(getCategoryPlaceholderIcon(item.category));
  }

  galleryList.innerHTML = images.map((imgSrc, idx) => `
    <img class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" src="${imgSrc}" alt="Gallery photo ${idx + 1}" onclick="switchDetailsMainImg('${imgSrc}', this)">
  `).join('');
}

window.switchDetailsMainImg = function(src, el) {
  const mainImg = document.getElementById("details-main-img");
  if (mainImg) mainImg.src = src;
  document.querySelectorAll(".gallery-thumb-item").forEach(t => t.classList.remove("active"));
  if (el) el.classList.add("active");
};

function printAssetSpecTag(item) {
  const printWin = window.open('', '_blank', 'width=600,height=400');
  if (!printWin) return;

  printWin.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Asset Tag - ${item.tag}</title>
      <style>
        body { font-family: sans-serif; padding: 2rem; background: #fff; color: #000; }
        .tag-card { border: 3px solid #000; padding: 1.5rem; max-width: 400px; border-radius: 8px; }
        .tag-header { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem; font-family: monospace; }
        .tag-name { font-size: 1.1rem; margin-bottom: 1rem; font-weight: 600; }
        .tag-field { margin-bottom: 0.4rem; font-size: 0.9rem; }
      </style>
    </head>
    <body>
      <div class="tag-card">
        <div class="tag-header">[ ${item.tag} ]</div>
        <div class="tag-name">${item.name}</div>
        <div class="tag-field"><strong>Category:</strong> ${item.category}</div>
        <div class="tag-field"><strong>S/N:</strong> ${item.serial || 'N/A'}</div>
        <div class="tag-field"><strong>User/Room:</strong> ${item.user || 'Unassigned'}</div>
        <div class="tag-field"><strong>Date Added:</strong> ${item.addedDate || '2026-08-17'}</div>
        <div class="tag-field"><strong>Price:</strong> ${item.price || '-'}</div>
      </div>
      <script>
        window.onload = function() { window.print(); window.close(); }
      </script>
    </body>
    </html>
  `);
  printWin.document.close();
}

/* ==========================================================================
   REPORTS & ANALYTICS CHARTS (PURE JS / SVG)
   ========================================================================== */
function renderReportsCharts() {
  const catBox = document.getElementById("category-chart-container");
  const statusBox = document.getElementById("status-chart-container");
  const kpiStrip = document.getElementById("analytics-kpi-strip");
  const valueBox = document.getElementById("value-chart-container");
  const userBox = document.getElementById("user-chart-container");
  const categoryDonutSvg = document.getElementById("category-donut-svg");
  const statusDonutSvg = document.getElementById("status-donut-svg");
  const categoryLegend = document.getElementById("category-legend");
  const statusDonutLegend = document.getElementById("status-donut-legend");
  const donutTotalNum = document.getElementById("donut-total-num");
  const topLabel = document.getElementById("analytics-top-label");

  if (!catBox || !statusBox) return;

  const total = inventoryItems.length || 1;

  // ── KPI STRIP ─────────────────────────────────────────────
  const available = inventoryItems.filter(i => i.status === "Available").length;
  const inUse = inventoryItems.filter(i => i.status === "In Use" || i.status === "Assigned").length;
  const repair = inventoryItems.filter(i => i.status === "Awaiting Repair" || i.status === "In Repair").length;
  const broken = inventoryItems.filter(i => i.status === "Not Working").length;
  const utilizationPct = total > 1 ? Math.round((inUse / (total)) * 100) : 0;

  // Compute total valuation
  let totalValue = 0;
  inventoryItems.forEach(item => {
    if (item.price) {
      const num = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      if (!isNaN(num)) totalValue += num;
    }
  });
  const fmtValue = totalValue >= 1000000
    ? `Rs ${(totalValue / 1000000).toFixed(2)}M`
    : `Rs ${totalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;

  if (kpiStrip) {
    kpiStrip.innerHTML = `
      <div class="analytics-kpi-card" style="--kpi-accent: #00ff9d;">
        <div class="analytics-kpi-icon" style="color:#00ff9d;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
        </div>
        <div class="analytics-kpi-body">
          <div class="analytics-kpi-val" style="color:#00ff9d;">${inventoryItems.length}</div>
          <div class="analytics-kpi-label">Total Assets</div>
        </div>
        <div class="analytics-kpi-ring" style="--ring-pct: 100%; --ring-color: #00ff9d;"></div>
      </div>
      <div class="analytics-kpi-card" style="--kpi-accent: #10b981;">
        <div class="analytics-kpi-icon" style="color:#10b981;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div class="analytics-kpi-body">
          <div class="analytics-kpi-val" style="color:#10b981;">${available}</div>
          <div class="analytics-kpi-label">Available</div>
        </div>
      </div>
      <div class="analytics-kpi-card" style="--kpi-accent: #3b82f6;">
        <div class="analytics-kpi-icon" style="color:#3b82f6;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div class="analytics-kpi-body">
          <div class="analytics-kpi-val" style="color:#3b82f6;">${inUse}</div>
          <div class="analytics-kpi-label">In Use</div>
        </div>
      </div>
      <div class="analytics-kpi-card" style="--kpi-accent: #f59e0b;">
        <div class="analytics-kpi-icon" style="color:#f59e0b;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </div>
        <div class="analytics-kpi-body">
          <div class="analytics-kpi-val" style="color:#f59e0b;">${repair}</div>
          <div class="analytics-kpi-label">Needs Repair</div>
        </div>
      </div>
      <div class="analytics-kpi-card" style="--kpi-accent: #ef4444;">
        <div class="analytics-kpi-icon" style="color:#ef4444;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </div>
        <div class="analytics-kpi-body">
          <div class="analytics-kpi-val" style="color:#ef4444;">${broken}</div>
          <div class="analytics-kpi-label">Not Working</div>
        </div>
      </div>
      <div class="analytics-kpi-card" style="--kpi-accent: #a78bfa;">
        <div class="analytics-kpi-icon" style="color:#a78bfa; font-size:0.85rem; font-weight:800;">LKR</div>
        <div class="analytics-kpi-body">
          <div class="analytics-kpi-val" style="color:#a78bfa; font-size:1.1rem;">${fmtValue}</div>
          <div class="analytics-kpi-label">Total Value</div>
        </div>
      </div>
      <div class="analytics-kpi-card" style="--kpi-accent: #38bdf8;">
        <div class="analytics-kpi-icon" style="color:#38bdf8; font-size:1.1rem; font-weight:800;">${utilizationPct}%</div>
        <div class="analytics-kpi-body">
          <div class="analytics-kpi-val" style="color:#38bdf8;">${utilizationPct}<span style="font-size:1rem;">%</span></div>
          <div class="analytics-kpi-label">Utilization Rate</div>
        </div>
      </div>
    `;
  }

  // ── CATEGORY DATA ─────────────────────────────────────────
  const categoryCounts = {};
  inventoryItems.forEach(i => {
    categoryCounts[i.category] = (categoryCounts[i.category] || 0) + 1;
  });

  const catPalette = [
    '#00ff9d', '#38bdf8', '#818cf8', '#a78bfa', '#34d399',
    '#fbbf24', '#fb923c', '#f472b6', '#22d3ee', '#84cc16',
    '#c084fc', '#f87171', '#4ade80', '#60a5fa'
  ];

  const catEntries = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

  // ── DONUT CHART (Category) ────────────────────────────────
  if (categoryDonutSvg) {
    const cx = 110, cy = 110, r = 80, strokeW = 28;
    const circumference = 2 * Math.PI * r;
    let offset = 0;
    let svgPaths = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#1e2030" stroke-width="${strokeW}"/>`;

    catEntries.forEach(([cat, count], idx) => {
      const pct = count / total;
      const dash = pct * circumference;
      const gap = circumference - dash;
      const color = catPalette[idx % catPalette.length];
      const rotate = (offset / circumference) * 360 - 90;
      svgPaths += `
        <circle
          class="donut-segment"
          cx="${cx}" cy="${cy}" r="${r}"
          fill="none"
          stroke="${color}"
          stroke-width="${strokeW}"
          stroke-dasharray="${dash} ${gap}"
          stroke-dashoffset="0"
          transform="rotate(${rotate}, ${cx}, ${cy})"
          data-cat="${cat}"
          style="transition: stroke-width 0.2s ease; cursor:pointer;"
          onmouseenter="this.setAttribute('stroke-width','${strokeW + 6}')"
          onmouseleave="this.setAttribute('stroke-width','${strokeW}')"
        />`;
      offset += dash;
    });

    categoryDonutSvg.innerHTML = svgPaths;
    if (donutTotalNum) donutTotalNum.textContent = inventoryItems.length;
  }

  // ── DONUT LEGEND (Category) ───────────────────────────────
  if (categoryLegend) {
    categoryLegend.innerHTML = catEntries.map(([cat, count], idx) => {
      const pct = Math.round((count / total) * 100);
      const color = catPalette[idx % catPalette.length];
      return `
        <div class="donut-legend-item">
          <span class="donut-legend-dot" style="background:${color}; box-shadow: 0 0 6px ${color}80;"></span>
          <span class="donut-legend-name">${cat}</span>
          <span class="donut-legend-val">${count}</span>
          <span class="donut-legend-pct" style="color:${color};">${pct}%</span>
        </div>`;
    }).join('');
  }

  // ── CATEGORY BAR LIST (Full Width) ────────────────────────
  catBox.innerHTML = catEntries.map(([catName, count], idx) => {
    const pct = Math.round((count / total) * 100);
    const color = catPalette[idx % catPalette.length];
    return `
      <div class="analytics-bar-row">
        <div class="analytics-bar-label">
          <span class="analytics-bar-dot" style="background:${color};"></span>
          <span class="analytics-bar-name">${catName}</span>
        </div>
        <div class="analytics-bar-track">
          <div class="analytics-bar-fill" style="--bar-width: ${pct}%; --bar-color: ${color};"></div>
        </div>
        <div class="analytics-bar-stats">
          <span class="analytics-bar-count">${count}</span>
          <span class="analytics-bar-pct" style="color:${color};">${pct}%</span>
        </div>
      </div>`;
  }).join('');

  if (topLabel) {
    const topCat = catEntries[0];
    topLabel.innerHTML = topCat ? `<span>🏆 Top: <strong style="color:#00ff9d;">${topCat[0]}</strong> (${topCat[1]} items)</span>` : '';
  }

  // ── STATUS DATA ───────────────────────────────────────────
  const statusCounts = {
    "Available": available,
    "In Use": inUse,
    "Awaiting Repair": repair,
    "Not Working": broken,
  };

  const statusColorMap = {
    "Available": "#10b981",
    "In Use": "#3b82f6",
    "Awaiting Repair": "#f59e0b",
    "Not Working": "#ef4444"
  };

  const statusIcons = {
    "Available": "✅",
    "In Use": "🔵",
    "Awaiting Repair": "🔧",
    "Not Working": "❌"
  };

  // STATUS BAR LIST (big cards style)
  statusBox.innerHTML = Object.entries(statusCounts).map(([statusName, count]) => {
    const pct = Math.round((count / total) * 100);
    const color = statusColorMap[statusName] || "#38bdf8";
    const icon = statusIcons[statusName] || "●";
    return `
      <div class="analytics-status-card">
        <div class="analytics-status-card-top">
          <span class="analytics-status-icon">${icon}</span>
          <div class="analytics-status-info">
            <div class="analytics-status-name">${statusName}</div>
            <div class="analytics-status-count" style="color:${color};">${count} <span style="color:var(--text-muted); font-size:0.8rem;">items</span></div>
          </div>
          <div class="analytics-status-pct-badge" style="color:${color}; border-color:${color}40; background:${color}15;">${pct}%</div>
        </div>
        <div class="analytics-status-track">
          <div class="analytics-bar-fill" style="--bar-width: ${pct}%; --bar-color: ${color};"></div>
        </div>
      </div>`;
  }).join('');

  // ── STATUS DONUT ──────────────────────────────────────────
  if (statusDonutSvg) {
    const cx = 90, cy = 90, r = 66, strokeW = 22;
    const circumference = 2 * Math.PI * r;
    let offset = 0;
    let svgPaths = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#1e2030" stroke-width="${strokeW}"/>`;
    const statusEntries = Object.entries(statusCounts).filter(([, v]) => v > 0);

    statusEntries.forEach(([sName, count]) => {
      const pct = count / total;
      const dash = pct * circumference;
      const gap = circumference - dash;
      const color = statusColorMap[sName] || '#38bdf8';
      const rotate = (offset / circumference) * 360 - 90;
      svgPaths += `
        <circle cx="${cx}" cy="${cy}" r="${r}"
          fill="none" stroke="${color}" stroke-width="${strokeW}"
          stroke-dasharray="${dash} ${gap}" stroke-dashoffset="0"
          transform="rotate(${rotate}, ${cx}, ${cy})"
          class="donut-segment" style="cursor:pointer;"/>`;
      offset += dash;
    });

    // Center text
    svgPaths += `
      <text x="${cx}" y="${cy - 6}" text-anchor="middle" fill="#fff" font-size="22" font-weight="800" font-family="Inter,sans-serif">${utilizationPct}%</text>
      <text x="${cx}" y="${cy + 14}" text-anchor="middle" fill="#6b7280" font-size="10" font-family="Inter,sans-serif">Utilized</text>`;

    statusDonutSvg.innerHTML = svgPaths;
  }

  // STATUS DONUT LEGEND
  if (statusDonutLegend) {
    statusDonutLegend.innerHTML = Object.entries(statusCounts).map(([sName, count]) => {
      const color = statusColorMap[sName] || '#38bdf8';
      const pct = Math.round((count / total) * 100);
      return `
        <div class="donut-legend-item" style="margin-bottom:0.6rem;">
          <span class="donut-legend-dot" style="background:${color}; box-shadow: 0 0 6px ${color}80;"></span>
          <span class="donut-legend-name" style="font-size:0.82rem;">${sName}</span>
          <span class="donut-legend-val">${count}</span>
          <span class="donut-legend-pct" style="color:${color};">${pct}%</span>
        </div>`;
    }).join('');
  }

  // ── VALUATION BY CATEGORY ─────────────────────────────────
  if (valueBox) {
    const valuationMap = {};
    inventoryItems.forEach(item => {
      if (item.price) {
        const num = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        if (!isNaN(num)) {
          valuationMap[item.category] = (valuationMap[item.category] || 0) + num;
        }
      }
    });

    const valEntries = Object.entries(valuationMap).sort((a, b) => b[1] - a[1]);
    const maxVal = valEntries[0]?.[1] || 1;

    valueBox.innerHTML = valEntries.slice(0, 10).map(([cat, val], idx) => {
      const pct = Math.round((val / maxVal) * 100);
      const color = catPalette[idx % catPalette.length];
      const fVal = val >= 1000000
        ? `Rs ${(val / 1000000).toFixed(2)}M`
        : `Rs ${val.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
      return `
        <div class="analytics-bar-row">
          <div class="analytics-bar-label">
            <span class="analytics-bar-dot" style="background:${color};"></span>
            <span class="analytics-bar-name">${cat}</span>
          </div>
          <div class="analytics-bar-track">
            <div class="analytics-bar-fill" style="--bar-width: ${pct}%; --bar-color: ${color};"></div>
          </div>
          <div class="analytics-bar-stats">
            <span class="analytics-bar-count" style="font-size:0.78rem;">${fVal}</span>
          </div>
        </div>`;
    }).join('');
  }

  // ── TOP ASSET USERS ───────────────────────────────────────
  if (userBox) {
    const userMap = {};
    inventoryItems.forEach(item => {
      const u = item.user && item.user !== "Unassigned" && item.user !== "-" ? item.user : null;
      if (u) userMap[u] = (userMap[u] || 0) + 1;
    });

    const userEntries = Object.entries(userMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const userColors = ['#00ff9d','#38bdf8','#818cf8','#fbbf24','#fb923c','#f472b6','#34d399','#a78bfa'];

    userBox.innerHTML = userEntries.map(([user, count], idx) => {
      const initials = user.replace(/^(Mr\.|Ms\.|Mrs\.)\s*/i, '').split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
      const color = userColors[idx % userColors.length];
      return `
        <div class="analytics-user-row">
          <div class="analytics-user-avatar" style="background: ${color}20; color:${color}; border-color:${color}40;">${initials}</div>
          <div class="analytics-user-info">
            <div class="analytics-user-name">${user}</div>
            <div class="analytics-user-count">${count} asset${count !== 1 ? 's' : ''} assigned</div>
          </div>
          <div class="analytics-user-bar-wrap">
            <div class="analytics-user-bar" style="--bar-color:${color}; width: ${Math.round((count / (userEntries[0][1])) * 100)}%;"></div>
          </div>
          <div class="analytics-user-num" style="color:${color};">${count}</div>
        </div>`;
    }).join('');
  }

  // ── TRIGGER ANIMATIONS ────────────────────────────────────
  // First frame: set width to 0, then animate to target
  requestAnimationFrame(() => {
    document.querySelectorAll('.analytics-bar-fill').forEach(el => {
      const target = el.style.getPropertyValue('--bar-width') || el.style.width || '0%';
      el.style.setProperty('--bar-width', target);
      el.style.width = '0%';
      requestAnimationFrame(() => {
        el.style.width = target;
      });
    });
  });
}

/* ==========================================================================
   SETTINGS & CSV EXPORT
   ========================================================================== */
function setupSettingsHandlers() {
  const resetBtn = document.getElementById("reset-default-data-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset inventory to initial default mock data? Any custom items will be replaced.")) {
        pushHistoryState("Reset to default mock data");
        inventoryItems = [...INITIAL_MOCK_DATA];
        saveInventoryData(false);
        showToast("Inventory reset to default mock data.");
        renderAll();
      }
    });
  }

  const darkBtn = document.getElementById("settings-theme-dark-btn");
  const lightBtn = document.getElementById("settings-theme-light-btn");

  if (darkBtn) darkBtn.addEventListener("click", () => setTheme("dark"));
  if (lightBtn) lightBtn.addEventListener("click", () => setTheme("light"));

  // JSON Export & Import Handlers
  const exportJsonBtn = document.getElementById("export-json-btn");
  if (exportJsonBtn) {
    exportJsonBtn.addEventListener("click", exportToJSON);
  }

  const importTriggerBtn = document.getElementById("import-json-trigger-btn");
  const importFileInput = document.getElementById("import-json-file-input");

  if (importTriggerBtn && importFileInput) {
    importTriggerBtn.addEventListener("click", () => importFileInput.click());
    importFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        importFromJSON(file);
        e.target.value = "";
      }
    });
  }
}

function exportToJSON() {
  if (inventoryItems.length === 0) {
    alert("No inventory data to export.");
    return;
  }

  const jsonStr = JSON.stringify(inventoryItems, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `IT_Inventory_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast("Full inventory JSON backup downloaded successfully!");
}

function importFromJSON(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!Array.isArray(parsed)) {
        alert("Invalid JSON format. Backup file must contain an array of inventory items.");
        return;
      }

      if (confirm(`Import JSON backup containing ${parsed.length} items? This will replace your current inventory data.`)) {
        pushHistoryState(`Import JSON backup (${parsed.length} items)`);
        inventoryItems = parsed;
        saveInventoryData(false);
        showToast(`Successfully imported ${parsed.length} inventory items from JSON backup!`);
        renderAll();
      }
    } catch (err) {
      alert("Failed to parse JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function exportToCSV() {
  if (inventoryItems.length === 0) {
    alert("No inventory data to export.");
    return;
  }

  const headers = ["Asset Tag", "Item Name", "Category", "Serial Number", "Status", "Assigned User", "Estimate Price"];
  const rows = inventoryItems.map(item => [
    `"${item.tag}"`,
    `"${item.name.replace(/"/g, '""')}"`,
    `"${item.category}"`,
    `"${item.serial || ''}"`,
    `"${item.status}"`,
    `"${item.user || ''}"`,
    `"${item.price || ''}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `IT_Inventory_Export_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Inventory exported to CSV!");
}

/* ==========================================================================
   UTILITY HELPERS
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
