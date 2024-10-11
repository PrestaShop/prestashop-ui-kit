// Retrieve the CSS variable values
const rootStyles = getComputedStyle(document.documentElement);

// Function to render color variables
function colors(variablePrefix, colorSuffixes) {
  let output = `
    <div class="variable">
      <div class="variable__line variable__line--head">
        <div class="variable__head">CSS variable name</div>
        <div class="variable__head">Variable preview</div>
        <div class="variable__head">Hex value</div>
      </div>
  `;

  // Iterate over each color suffix
  colorSuffixes.forEach((color) => {
    const variableName = `${variablePrefix}-${color}`;
    const variableValue = rootStyles.getPropertyValue(variableName).trim();

    // Append a line for each variable
    output += `
      <div class="variable__line">
        <div class="variable__name">
          <span class="variable__code">${variableName}</span>
        </div>
        <div class="variable__preview" style="background-color: ${variableValue};"></div>
        <div class="variable__value">
          <span class="variable__code">${variableValue}</span>
        </div>
      </div>
    `;
  });

  output += `</div>`; // Close the main variable div

  // Return the generated HTML
  return output;
}

// Primary colors
export function renderPrimaryColors() {
  const primaryColors = [900, 800, 700, 600, 500, 400, 300, 200, 100]; // Define the range of suffixes
  return colors('--cdk-primary', primaryColors);
}

// Red colors
export function renderRedColors() {
  const redColors = [700, 500, 300, 100, 50];
  return colors('--cdk-red', redColors);
}

// Common colors
export function renderCommonColors() {
  const commonColors = ["white", "black"];
  return colors('--cdk', commonColors);
}

// Purple colors
export function renderPurpleColors() {
  const purpleColors = [700, 500, 50];
  return colors('--cdk-purple', purpleColors);
}

// Blue colors
export function renderBlueColors() {
  const blueColors = [700, 500, 300, 100, 50];
  return colors('--cdk-blue', blueColors);
}

// Ocean blue colors
export function renderOceanBlueColors() {
  const oceanBlueColors = [700, 500, 50];
  return colors('--cdk-ocean-blue', oceanBlueColors);
}

// Yellow colors
export function renderYellowColors() {
  const yellowColors = [500, 300, 100, 50];
  return colors('--cdk-yellow', yellowColors);
}

// Amber colors
export function renderAmberColors() {
  const amberColors = [500, 100];
  return colors('--cdk-amber', amberColors);
}

// Green colors
export function renderGreenColors() {
  const greenColors = [500, 300, 100, 50];
  return colors('--cdk-green', greenColors);
}

// Function to render fonts variables
function fonts(variablePrefix, fontSuffixes) {
  let output = `
    <div class="variable">
      <div class="variable__line variable__line--head">
        <div class="variable__head">CSS variable name</div>
        <div class="variable__head">Variable preview</div>
        <div class="variable__head">Font value</div>
      </div>
  `;

  const variableName = `${variablePrefix}-${fontSuffixes}`;
  const variableValue = rootStyles.getPropertyValue(variableName).trim();

  // Append a line for each variable
  output += `
    <div class="variable__line">
      <div class="variable__name">
        <span class="variable__code">${variableName}</span>
      </div>
      <div class="variable__preview" style="font-family: ${variableValue};">
        <h1>Lorem ipsum</h1>
      </div>
      <div class="variable__value">
        <span class="variable__code">${variableValue}</span>
      </div>
    </div>
  `;
  output += `</div>`; // Close the main variable div

  // Return the generated HTML
  return output;
}

// Primary font
export function renderPrimaryFont() {
  return fonts('--cdk-font-family', 'primary');
}

// Secondary font
export function renderSecondaryFont() {
  return fonts('--cdk-font-family', 'secondary');
}

// Function to render font size variables
function fontSizes(variablePrefix, sizesSuffixes) {
  let output = `
    <div class="variable">
      <div class="variable__line variable__line--head">
        <div class="variable__head">CSS variable name</div>
        <div class="variable__head">Variable preview</div>
        <div class="variable__head">Rem value</div>
      </div>
  `;

  // Iterate over each color suffix
  sizesSuffixes.forEach((size) => {
    const variableName = `${variablePrefix}-${size}`;
    const variableValue = rootStyles.getPropertyValue(variableName).trim();

    // Append a line for each variable
    output += `
      <div class="variable__line">
        <div class="variable__name">
          <span class="variable__code">${variableName}</span>
        </div>
        <div class="variable__preview" style="font-size: ${variableValue}; font-family: var(--cdk-font-primary);">
          <span>
            Lorem ipsum
          </span>
        </div>
        <div class="variable__value">
          <span class="variable__code">${variableValue}</span>
        </div>
      </div>
    `;
  });

  output += `</div>`; // Close the main variable div

  // Return the generated HTML
  return output;
}

// Font sizes
export function renderFontSizes() {
  const sizes = ["5xl", "4xl", "3xl", "2xl", "xl", "lg", "base", "sm", "xs"];
  return fontSizes('--cdk-font-size', sizes);
}

// Function to render font size variables
function boxShadows(variablePrefix, shadowsSuffixes) {
  let output = `
    <div class="variable">
      <div class="variable__line variable__line--head">
        <div class="variable__head">CSS variable name</div>
        <div class="variable__head">Variable preview</div>
        <div class="variable__head">Shadow value</div>
      </div>
  `;

  // Iterate over each color suffix
  shadowsSuffixes.forEach((shadow) => {
    const variableName = `${variablePrefix}-${shadow}`;
    const variableValue = rootStyles.getPropertyValue(variableName).trim();

    // Append a line for each variable
    output += `
      <div class="variable__line">
        <div class="variable__name">
          <span class="variable__code">${variableName}</span>
        </div>
        <div class="variable__preview variable__preview--shadow">
          <div class="shadow__preview" style="box-shadow: ${variableValue};"></div>
        </div>
        <div class="variable__value">
          <span class="variable__code">${variableValue}</span>
        </div>
      </div>
    `;
  });

  output += `</div>`; // Close the main variable div

  // Return the generated HTML
  return output;
}

// Box shadows sizes
export function renderBoxShadows() {
  const shadows = ["default", "sm", "md", "lg", "xl", "2xl", "inner", "none", "overlay", "sticky", "pop-modal"];
  return boxShadows('--cdk-box-shadow', shadows);
}

// Function to render spacing variables
function sizes(variablePrefix, spacingSuffixes) {
  let output = `
    <div class="variable">
      <div class="variable__line variable__line--head">
        <div class="variable__head">CSS variable name</div>
        <div class="variable__head">Variable preview</div>
        <div class="variable__head">Rem value</div>
      </div>
  `;

  // Iterate over each color suffix
  spacingSuffixes.forEach((space) => {
    const variableName = `${variablePrefix}-${space}`;
    const variableValue = rootStyles.getPropertyValue(variableName).trim();

    // Append a line for each variable
    output += `
      <div class="variable__line">
        <div class="variable__name">
          <span class="variable__code">${variableName}</span>
        </div>
        <div class="variable__preview variable__preview--space">
          <div class="space__preview" style="width: ${variableValue};"></div>
        </div>
        <div class="variable__value">
          <span class="variable__code">${variableValue}</span>
        </div>
      </div>
    `;
  });

  output += `</div>`; // Close the main variable div

  // Return the generated HTML
  return output;
}

// Spaces
export function renderSizes() {
  const spaces = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 30, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 288, 320];
  return sizes('--cdk-size', spaces);
}
