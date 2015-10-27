function CarTemplate(data) {
  return `
    <li>${data.Owner} drives a ${data.Color} ${data.Year} ${data.Make} ${data.Model} named ${data.Name}.<br><img class='carImg' src='${data.ImgSrc}'><br></li>
    `;
}

export default CarTemplate;