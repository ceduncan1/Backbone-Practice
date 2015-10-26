function CarTemplate(data) {
  return `
    <li>${data.Owner} drives a ${data.Color} ${data.Year} ${data.Make} ${data.Model} named ${data.Name}</li>
    `;
}

export default CarTemplate;