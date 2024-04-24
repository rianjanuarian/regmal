
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const fs = require('fs');
  const existingData = JSON.parse(fs.readFileSync('./family.json', 'utf8'));
  existingData.push(data)
    
    fs.writeFileSync('./family.json', JSON.stringify(existingData));

   console.log("success")
  } else {
    console.log("failed")
  }
}

