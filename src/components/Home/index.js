import React, { useState } from 'react'
import { RoadMap } from '../RoadMap';
import { SearchBar } from '../Shared'

import {
  HomeContainer,
  SerchNumWrapper
} from './styles'

export const Home = (props) => {
  const [searchNum, setSearchNum] = useState(null)


  const searchKey = () => {
    var input, filter, tr, td, i, txtValue;
    input = document.getElementById("keyInput");
    filter = input.value.toUpperCase();
    tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const handleSearchNum = (val) => {
    console.log('val ', val)
    setSearchNum(val)
  }



  return (
    <HomeContainer id='home'>


      <section className='anotations'>
        <p>
          -----------------------------<br /><br />
          LEGEND<br />
          STREET FURNITURE<br />
          ------------------------------<br />
          BB - BELISHA BEACON<br />
          Bin -  LITTER BIN<br />
          BO -  BOLLARD<br />
          BS -  BUS STOP<br />
          CPO -  CONCRETE POST<br />
          EP -  ELECTRIC POLE<br />
          FHM -  FIRE HYDRANT MARKER<br />
          FL -  FLOOD LIGHT<br />
          FP -  FLAG POLE<br />
          JB -  JUNCTION BOX<br />
          GB -  GRIT BOX<br />
          GPO -  GATE POST<br />
          IBO -  ILLUMINATED BOLLARD<br />
          LP -  LAMP POST<br />
          LW -  LIGHTWELL<br />
          MPO -  METAL POST<br />
          PB -  POST BOX<br />
          PM -  PARKING METER<br />
          RS -  ROAD SIGN<br />
          SI -  SIGN<br />
          SL -  SUNKEN LIGHT<br />
          SS -  SPRINKLER SYSTEM<br />
          Tap -  ATTACHED TO WALL ETC<br />
          TP -  TELEGRAPH POLE<br />
          TPO -  TIMBER POST<br />


          <br /><br />


          -----------------------------

          PIPES

          -----------------------------
          <br /><br />

          DP -  DOWN PIPE<br />
          GP -  GAS PIPE<br />
          RWP -  RAIN WATER PIPE<br />
          SP -  STAND PIPE<br />
          SVP -  SOIL VENT PIPE<br />
          VP -  VENT PIPE<br />
          WP -  WASTE PIPE<br />
          <br /><br /><br />
          -----------------------------<br />
          <br />
          LEVELS<br />
          <br />
          -----------------------------<br />
          <br />
          CL -  COVER LEVEL<br />
          CHL -  CHIMNEY LEVEL<br />
          EL -  EAVES LEVEL<br />
          FFL -  FINISHED FLOOR LEVEL<br />
          FRL -  FLAT ROOF LEVEL<br />
          ID -  INVERT DEPTH<br />
          IL -  INVERT LEVEL<br />
          PAL -  PARAPET WALL LEVEL<br />
          RL -  RIDGE LEVELTFL TOP OF FENCE LEVEL<br />
          TWL -  TOP OF WALL LEVEL<br />
          <br />
          -----------------------------<br />
          <br />
          VEGETATION<br />
          <br />
          -----------------------------<br />
          <br />
          BSH -  BUSH<br />
          FB -  FLOWER/SHRUB BORDER<br />
          HDG -  HEDGE<br />
          OVG -  OVERGROWTH<br />
          <br />
          -----------------------------<br />
          <br />
          TREE -  TYPE<br />
          <br />
          <br />
          GIRTH / SPREAD (R)<br />
          -----------------------------<br />
          <br />
          <br />
          <br />
          -----------------------------<br />
          <br />
          WALLS & FENCES<br />
          <br />
          -----------------------------<br />
          <br />
          BW -  BLOCK WALL<br />
          BRTW -  BRICK RETAINING WALL<br />
          BRW -  BRICK WALL<br />
          CBF -  CLOSE BOARD FENCE<br />
          CCF -  CHESTNUT CLEFT FENCE<br />
          CIF -  CORRUGATED IRON FENCE<br />
          CLF -  CHAIN LINK FENCE<br />
          CRW -  CONCRETE RETAINING WALL<br />
          CW -  CONCRETE WALL<br />
          DIL -  DILAPIDATED<br />
          FPO -  FENCE POST<br />
          HR -  HAND RAIL<br />
          MF -  MISCELLANEOUS FENCE<br />
          MRF -  METAL RAILING FENCE<br />
          OBF -  OPEN BOARD FENCE<br />
          PRF -  POST & RAIL FENCE<br />
          RTW -  RETAINING WALL<br />
          STW -  STONE WALL<br />
          STRW -  STONE RETAINING WALL<br />
          WMF -  WIRE MESH FENCE<br />
          <br />
          <br />
          <br />
          -----------------------------<br />
          <br />
          INSPECTION CHAMBERS<br />
          <br />
          -----------------------------<br />
          <br />
          AC -  ACCESS COVER<br />
          EI - C ELECTRIC INSPECTION COVER<br />
          FH -  FIRE HYDRANT<br />
          GIG -  GAS INSPECTION COVER<br />
          GM -  GAS METER<br />
          GY -  GULLY<br />
          IC -  INSPECTION COVER<br />
          SV -  STOP VALVE<br />
          TIC -  TELECOM COVERUTL UNABLE TO LIFT<br />
          WIC -  WATER INSPECTION COVER<br />
          <br />
          -----------------------------<br />
          <br />
          SURFACES<br />
          <br />
          -----------------------------<br />

          ASPT -  ASPHALT<br />
          BCP -  BARK CHIPS<br />
          BPAV -  BRICK PAVING<br />
          CONC -  CONCRETE<br />
          CPAV -  CONCRETE PAVING SLABS<br />
          CPS -  CRAZY PAVING<br />
          FB -  FLOWER/SHRUB BORDER<br />
          GRS -  GRASS<br />
          GVL -  GRAVEL<br />
          MPAV -  MIXED PAVING<br />
          MRB -  MARBLE STONES<br />
          SHG -  SHINGLE<br />
          TLE -  TILE<br />
          TMAC -  TARMAC<br />
          TPAV -  TACTILE PAVING<br />
          WDK -  WOODEN DECKING<br />
          WDS -  WOODEN SLEEPER<br />
          <br />
          SINGLE GATE<br />
          DOUBLE GATE<br /><br />
          BANKING<br />
          LEVEL<br />
          SURVEY STATION<br />
          <br />
        </p><br />
        <br />
      </section>

      <section className='layers'>
        <div>
          <h2 id="list of autocad commands">List of Layers</h2>
          <p>
            0 <br />
0-RCP <br />
1-CHECK<br />
ANNO_SYMBOLS<br />
ANNO_TEXT<br />
ANNO_TITLE<br />
BEAMS<br />
CEILING_SLOPE<br />
Defpoints<br />
DOORS<br />
DOORS_HATCH<br />
DOORS_HEADER<br />
ELECTRIC_LIGHT<br />
ELECTRIC_SWITCHES_PLUGS<br />
ELEVATIONS_DOORS<br />
ELEVATIONS_DRAINAGE<br />
ELEVATIONS_FENCE	<br />
ELEVATIONS_GROUND_LINE<br />
ELEVATIONS_MISC<br />
ELEVATIONS_NEIGHBOUR<br />
ELEVATIONS_PIPEWORK<br />
ELEVATIONS_ROOF<br />
ELEVATIONS_ROOF_FASCIA_EAVES<br />
ELEVATIONS_STEPS<br />
ELEVATIONS_VENT<br />
ELEVATIONS_WALLS<br />
ELEVATIONS_WINDOWS<br />
ELEVATIONS_WINDOWS_SKYLIGHT<br />
FITTING_FLOOR_CHANGE<br />
FITTING_FURNITURE_FIXED<br />
FITTING_KITCHEN<br />
FITTING_SANITARY<br />
FITTING_SKIRTING<br />
LEVELS_CEILING<br />
LEVELS_FLOOR<br />
LEVELS_WINDOWS<br />
MISC<br />
PRESUMED<br />
ROOF<br />
SERVICES_DRAINAGE<br />
SERVICES_HEATING<br />
SERVICES_M&E<br />
SERVICES_PIPEWORK	<br />
SERVICES_RADIATORS	<br />
SERVICES_SWITCHES_SOCKETS<br />
SERVICES_VENT<br />
SERVICES_VENTING<br />
STAIRS<br />
STEPS<br />
T-BANKING<br />
T-BOLES<br />
T-BUILDING<br />
T-CANOPIES<br />
T-CHANGE_OF_SURFAC	<br />
T-DRAINAGE<br />
T-DROPKERB<br />
T-EL_RL<br />
T-FENCE<br />
T-FOLLIAGE<br />
T-GATE<br />
T-GRID<br />
T-IC<br />
T-KERB<br />
T-L1-L2-L3 ETC<br />
T-OVERHEAD_CABLES<br />
T-POST_POLES<br />
T-SERVICES<br />
T-STEPS<br />
T-STREET FURNITURE<br />
T-SURVEY_LEVELS<br />
T-SURVEY_STATIONS<br />
T-TEXT<br />
T-TITLE<br />
T-TREES_CANOPIES_UNEDITED<br />
T-WALL<br />
WALLS<br />
WALLS_PLINTH<br />
WALLS_TILE<br />
WALLS_WOOD<br />
WINDOWS<br />
WINDOWS_SKYLIGHT<br />
WOOD_FRAMING<br />
WOOD_RAFTERS<br />
            <br />
          </p>
        </div>


      </section>
      <h2 id="floor-plan-abbreviations"><strong>Floor plan abbreviations</strong></h2>
      <section>
        <ul>
          <li>AC or A/C — Air Conditioner</li>
          <li>B — Basin</li>
          <li>BC —&nbsp; Bookcase</li>
          <li>BV — Butterfly valve</li>
          <li>CAB — Cabinet</li>
          <li>CBD — Cupboard</li>
          <li>CF —&nbsp; Concrete floor</li>
          <li>CL — Closet</li>
          <li>CLG — Ceiling</li>
          <li>COL — Column</li>
          <li>CW — Cavity wall</li>
          <li>CT — Ceramic tile</li>
          <li>D —&nbsp; Door or dryer</li>
          <li>DS — Downspout</li>
          <li>DW —&nbsp; Dishwasher</li>
          <li>EF — Exhaust fan</li>
          <li>FD — Floor drain</li>
          <li>GM —&nbsp; Gas meter</li>
          <li>HTR —&nbsp; Heater</li>
          <li>HW —&nbsp; Hot water unit or tank</li>
          <li>KIT —&nbsp; Kitchen</li>
          <li>LIN —&nbsp; Linen cupboard</li>
          <li>LTG — Lighting</li>
          <li>MSB —&nbsp; Master switchboard</li>
          <li>O or OV — Oven</li>
          <li>REFRIG or REF — Refrigerator</li>
          <li>SD — Smoke detector, sliding door, or sewer drain</li>
          <li>SHR — Shower</li>
          <li>WC — Toilet (water closet)</li>
          <li>VENT —&nbsp; Ventilator</li>
          <li>VP — Vent pipe</li>
          <li>WIC — Walk-in closet</li>
          <li>W — Window or washer</li>
          <li>WD — Window</li>
          <li>WH — Water heater</li>
          <li>WR — Wardrobe</li>
        </ul>
      </section>
      <section className='general-content'>
        <div className="d-flex justify-content-center">
          <div className="col-10 general-content__text">
            <div className="d-flex justify-content-between position-relative pt-3 pb-2">
              <h2 id="list of autocad commands">List of AutoCAD commands</h2>
              <input
                type="text"
                id="keyInput"
                className="position-fixed"
                placeholder="Search for names..."
                title="Type in a name"
                onKeyUp={() => searchKey()}
              />
            </div>

            <table border="1">
              <tbody>
                <tr aria-rowindex="1">
                  <td data-celllook="69905"><b><span data-contrast="none">General
                    Shortcuts</span></b><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="69905"><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="2">
                  <td data-celllook="4369"><span data-contrast="auto">Q&nbsp;</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Saves current drawing</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="3">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + D</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle coordinate
                    display</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="4">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + G</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle grid</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="5">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + H</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle pick style</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="6">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + E</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Cycle isometric planes</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="7">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + F&nbsp;</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle running object
                    snaps</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="8">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + I</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle&nbsp;coords</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="9">
                  <td data-celllook="4369"><span data-contrast="auto">E</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Remove objects from a
                    drawing</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="10">
                  <td data-celllook="4369"><span data-contrast="auto">x</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Breaks down a compound
                    object</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="11">
                  <td data-celllook="4369"><span data-contrast="auto">J</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Join similar objects to form one
                    object</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="12">
                  <td data-celllook="4369"><span data-contrast="auto">D</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Create and modifies dimension
                    styles</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="13">
                  <td data-celllook="4369"><span data-contrast="auto">G</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Create saved sets of
                    objects&nbsp;</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="14">
                  <td data-celllook="4369"><span data-contrast="auto">Z</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Zoom</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="15">
                  <td data-celllook="4369"><span data-contrast="auto">ESC</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Cancel current command</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
              </tbody>
            </table>


            <p><span
              data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
            </p>
            <table border="1">
              <tbody>
                <tr aria-rowindex="1">
                  <td data-celllook="69905"><b><span data-contrast="none">Manage Screen
                    Shortcuts</span></b><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="69905"><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="2">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + 0 (zero)</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Clean screen</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="3">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + 1</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open property palette</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="4">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl +2&nbsp;</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Design center palette</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="5">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + 3</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open tool palette</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="6">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + 4</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open sheet set palette</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="7">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + 6</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span
                    data-contrast="auto">Open&nbsp;DBConnect&nbsp;Manager</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="8">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + 7</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open markup set manager
                    palette</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="9">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + 8</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open quick calc</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="10">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + 9</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open command-line</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p><span
              data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
            </p>
            <table border="1">
              <tbody>
                <tr aria-rowindex="1">
                  <td data-celllook="69905"><b><span data-contrast="none">Toggle Drawing
                    Shortcuts</span></b><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="69905"><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="2">
                  <td data-celllook="4369"><span data-contrast="auto">F1</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Display help</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="3">
                  <td data-celllook="4369"><span data-contrast="auto">F2</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle text screen</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="4">
                  <td data-celllook="4369"><span data-contrast="auto">F3</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle object snap mode</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="5">
                  <td data-celllook="4369"><span data-contrast="auto">F4</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle 3DOsnap</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="6">
                  <td data-celllook="4369"><span data-contrast="auto">F5</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle&nbsp;isoplane</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="7">
                  <td data-celllook="4369"><span data-contrast="auto">F6</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle dynamic UCS</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="8">
                  <td data-celllook="4369"><span data-contrast="auto">F7</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle grid mode</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="9">
                  <td data-celllook="4369"><span data-contrast="auto">F8</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle ortho mode</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="10">
                  <td data-celllook="4369"><span data-contrast="auto">F9</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle snap mode</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="11">
                  <td data-celllook="4369"><span data-contrast="auto">F10</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle polar mode</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="12">
                  <td data-celllook="4369"><span data-contrast="auto">F11</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle object snap tracking</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="13">
                  <td data-celllook="4369"><span data-contrast="auto">F12</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Toggle dynamic input mode</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p><span
              data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
            </p>
            <table border="1">
              <tbody>
                <tr aria-rowindex="1">
                  <td data-celllook="69905"><b><span data-contrast="none">General Drawing
                    Shortcuts</span></b><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="2">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + N</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">New drawing</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="3">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + S</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Save drawing</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="4">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + O</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open drawing</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="5">
                  <td data-celllook="4369"><span data-contrast="auto">Ctrl + P</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Plot dialog box</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="6">
                  <td data-celllook="4369"><span data-contrast="auto">A</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw an arc with three
                    points</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="7">
                  <td data-celllook="4369"><span data-contrast="auto">B</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open block dialogue box to make a
                    block</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="8">
                  <td data-celllook="4369"><span data-contrast="auto">BO</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a boundary&nbsp;</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="9">
                  <td data-celllook="4369"><span data-contrast="auto">I</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Insert a block into a
                    drawing</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="10">
                  <td data-celllook="4369"><span data-contrast="auto">C</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a circle</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="11">
                  <td data-celllook="4369"><span data-contrast="auto">EL</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw an ellipse</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="12">
                  <td data-celllook="4369"><span data-contrast="auto">REC</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a rectangle</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="13">
                  <td data-celllook="4369"><span data-contrast="auto">PL</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a polyline</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="14">
                  <td data-celllook="4369"><span data-contrast="auto">POL</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a polygon</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="15">
                  <td data-celllook="4369"><span data-contrast="auto">L</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a line</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="16">
                  <td data-celllook="4369"><span data-contrast="auto">ML</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw multi lines</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="17">
                  <td data-celllook="4369"><span data-contrast="auto">DO</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a solid donut shape</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="18">
                  <td data-celllook="4369"><span data-contrast="auto">DT</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Single line text</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="19">
                  <td data-celllook="4369"><span data-contrast="auto">F</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw an arc between two intersecting
                    lines</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="20">
                  <td data-celllook="4369"><span data-contrast="auto">O</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Offset an object by the
                    distance</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="21">
                  <td data-celllook="4369"><span data-contrast="auto">RAY</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Construction line in one
                    direction</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p><span
              data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
            </p>
            <table border="1">
              <tbody>
                <tr aria-rowindex="1">
                  <td data-celllook="69905"><b><span data-contrast="none">Formatting Shortcuts</span></b><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="69905"><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="2">
                  <td data-celllook="4369"><span data-contrast="auto">AP</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open application load dialogue
                    box</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="3">
                  <td data-celllook="4369"><span data-contrast="auto">BE</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open the edit block definition dialogue
                    box</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="4">
                  <td data-celllook="4369"><span data-contrast="auto">BH</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open hatch and the gradient dialogue
                    box</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="5">
                  <td data-celllook="4369"><span data-contrast="auto">D</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open&nbsp;dimension style manager
                    dialogue box</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="6">
                  <td data-celllook="4369"><span data-contrast="auto">DC</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open the design center</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="7">
                  <td data-celllook="4369"><span data-contrast="auto">LA</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open layer manager</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="8">
                  <td data-celllook="4369"><span data-contrast="auto">LT</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open line type manager</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="9">
                  <td data-celllook="4369"><span data-contrast="auto">LTS</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Change the line type scale</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="10">
                  <td data-celllook="4369"><span data-contrast="auto">LW</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open line weight settings dialogue
                    box</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="11">
                  <td data-celllook="4369"><span data-contrast="auto">MA</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Match properties of an
                    object</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="12">
                  <td data-celllook="4369"><span data-contrast="auto">OP</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Launch options dialogue box</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="13">
                  <td data-celllook="4369"><span data-contrast="auto">SSM</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open sheet set manager
                    palette</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="14">
                  <td data-celllook="4369"><span data-contrast="auto">ST</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open text style dialogue box</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="15">
                  <td data-celllook="4369"><span data-contrast="auto">TP</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Display tool palette</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="16">
                  <td data-celllook="4369"><span data-contrast="auto">TS</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open table style dialogue
                    box</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <span
                data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:276}">&nbsp;</span>
            </p>
            <table border="1">
              <tbody>
                <tr aria-rowindex="1">
                  <td data-celllook="69905"><b><span data-contrast="none">3D Shortcuts</span></b><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="69905"><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="2">
                  <td data-celllook="4369"><span data-contrast="auto">3D</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Command line 3D solid
                    potions</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="3">
                  <td data-celllook="4369"><span data-contrast="auto">Box</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a cube</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="4">
                  <td data-celllook="4369"><span data-contrast="auto">Cylinder</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a cylinder</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="5">
                  <td data-celllook="4369"><span data-contrast="auto">EXT</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Extrude a face</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="6">
                  <td data-celllook="4369"><span data-contrast="auto">IN</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Intersect an object</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="7">
                  <td data-celllook="4369"><span data-contrast="auto">REV</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Revolve an object about an
                    axis</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="8">
                  <td data-celllook="4369"><span data-contrast="auto">RR</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open render dialogue box</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="9">
                  <td data-celllook="4369"><span data-contrast="auto">SE</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Section</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="10">
                  <td data-celllook="4369"><span data-contrast="auto">SL</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Slice a solid</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="11">
                  <td data-celllook="4369"><span data-contrast="auto">SU</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Subtract selection from
                    solid</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="12">
                  <td data-celllook="4369"><span data-contrast="auto">TOR</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw torus shape</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="13">
                  <td data-celllook="4369"><span data-contrast="auto">UC</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Display UCS manager dialogue
                    box</span><span
                      data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="14">
                  <td data-celllook="4369"><span data-contrast="auto">UCS</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">UCS command-line options</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="15">
                  <td data-celllook="4369"><span data-contrast="auto">VPORTS</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Open viewport dialogue box</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
                <tr aria-rowindex="16">
                  <td data-celllook="4369"><span data-contrast="auto">WE</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                  <td data-celllook="4369"><span data-contrast="auto">Draw a wedge</span><span
                    data-ccp-props="{&quot;201341983&quot;:0,&quot;335559740&quot;:240}">&nbsp;</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="image-wrapper">
            <img src="/images/AutoCAD-keyboard-shortcuts-1.jpg" alt="" />
          </div>

        </div>
      </section>
      <SerchNumWrapper id='console-search'>
        <SearchBar
          lazyLoad
          onSearch={handleSearchNum}
        />
      </SerchNumWrapper>
      <RoadMap searchNum={searchNum} />
    </HomeContainer>
  )
}
