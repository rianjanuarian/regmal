
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const fs = require('fs');
  const existingData = JSON.parse(fs.readFileSync('./family.json', 'utf8'));
  existingData.push(data)
    
    fs.writeFileSync('./family.json', JSON.stringify(existingData));

    res.status(200).json({ message: 'Data berhasil disimpan.' });
  } else {
    res.status(405).json({ message: 'Metode HTTP tidak diizinkan.' });
  }
}

