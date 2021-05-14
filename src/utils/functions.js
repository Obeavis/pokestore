export function moneyFormat(value) {
  if (!Number(value) && value === 0) return "";
  let number = value * 301;
  number = (number / 100).toFixed(2).split(".");
  number[0] = `R$ ${number[0].split(/(?=(?:...)*$)/).join(".")}`;
  return number.join(",");
}

export function moneyMask(value) {
  if (!Number(value) && value === 0) return "";
  const number = (value / 100).toFixed(2).split(".");
  number[0] = `R$ ${number[0].split(/(?=(?:...)*$)/).join(".")}`;
  return number.join(",");
}

export function setPrice(value) {
  if (!Number(value) && value === 0) return "";
  return value * 301;
}

export function getImage(sprites, useDefault) {
  const dream_world = sprites?.other?.dream_world?.front_default;
  const artwork = sprites?.other?.["official-artwork"]?.front_default;
  const defaultSprite = sprites?.front_default;
  if (useDefault) {
    return defaultSprite
      ? defaultSprite
      : artwork
      ? artwork
      : dream_world
      ? dream_world
      : "";
  } else {
    return dream_world
      ? dream_world
      : artwork
      ? artwork
      : defaultSprite
      ? defaultSprite
      : "";
  }
}

export function getColor(variant) {
  const colors = {
    fire: "#df3102",
    water: "#3394f6",
    grass: "#75c435",
    electric: "#fbbc12",
  };

  return colors[variant];
}

export function isEmpty(obj) {
  return obj && Object.keys(obj).length === 0;
}
