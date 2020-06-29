// Legacy code from old table. Need to update....
//************************************** Modal Functions *******************************************
function elementModalInfo(currentElement) {
    let { number, category, group_block, atomic_mass, appearance, phase, boil, melt, 
      molar_heat, density, electronegativity, atomic_radius, ion_radius, van_der_waals_radius, ionization_energy, electron_affinity, 
      bonding_type, discovered_by, named_by, year_discovered, summary, source} = currentElement;
    let elementinformationOutput:string = "<ul>";
    elementFact("Atomic Number", number);
    elementinformationOutput += `<li><span class= 'font-weight-bold'>Category: </span>${category}`;
    if (!category.includes(group_block) && group_block != "lanthanoid" && group_block != "actinoid") 
      {
        elementinformationOutput += ", " + group_block;
      }
    elementinformationOutput += `</li>\n`;
    elementFact("Atomic Mass (amu)", atomic_mass);
    elementFact("Appearance", appearance);
    elementFact("Phase (Room Temperature)", phase);
    elementFact("Boiling Point", boil, " K");
    elementFact("Melting Point", melt, " K");
    elementFact("Molar Heat", molar_heat, " C");
    elementFact("Density", density, "g/L");
    elementFact("Electronegativity", electronegativity);
    elementFact("Atomic Radius", atomic_radius, '&Aring;'); 
    elementFact("Ionic Radius", ion_radius, '&Aring;'); 
    elementFact("Van der Waals Radius", van_der_waals_radius, '&Aring;');
    elementFact("Ionization Energy", ionization_energy, "eV");
    elementFact("Electron Affinity", electron_affinity,"kJ/mol");
    elementFact("Bonding Type", bonding_type);
    elementFact("Discovered by", discovered_by, "(" + year_discovered + ")");
    elementFact("Named by", named_by);
    elementinformationOutput += `</ul>\n${summary}<br>
    <span class= 'font-weight-bold'>For More information see </span><a href="${source}">${source}</a>`;
    return elementinformationOutput;
  
    function elementFact(title, elementInformation, units = ""): string|void {
      if ((elementInformation !== null) || elementInformation === 0 ) {
        elementinformationOutput += `<li><span class= 'font-weight-bold'>${title}</span> ${elementInformation} ${units}</li>\n`;
      }
    }
  }

  
// ----------------------------- Displays Modals --------------------------
$(document).on("click", ".element", function() {
    let elementId = this.id;
    if (elementId != "lanth" && elementId != "actin") {
      let currentElement = PeriodicTable[elementId - 1];
      let {name, symbol} = currentElement;
      $(".modal-title").html(`${name} (${symbol}) `);
      console.log(elementModalInfo(currentElement));
      $(".modal-body").html(elementModalInfo(currentElement));
    }
});