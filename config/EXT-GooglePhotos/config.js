var defaultConfig = {
  module: 'EXT-GooglePhotos',
  position: 'top_left',
  disabled: false,
  config: {
    debug: false,
    displayType: 0,
    displayDelay: 10 * 1000,
    displayInfos: true,
    albums: [],
    sort: "new", // "old", "random"
    hiResolution: true,
    timeFormat: "DD/MM/YYYY HH:mm",
    moduleHeight: 300,
    moduleWidth: 300
  }
}

var schema = {
  "title": "EXT-GooglePhotos",
  "description": "{PluginDescription}",
  "type": "object",
  "properties": {
    "module": {
      "type": "string",
      "title": "{PluginName}",
      "default": "EXT-GooglePhotos"
    },
    "position": {
      "type": "string",
      "title": "{PluginPosition}",
      "default": "top_left",
      "enum": [
        "top_bar",
        "top_left",
        "top_center",
        "top_right",
        "upper_third",
        "middle_center",
        "lower_third",
        "bottom_left",
        "bottom_center",
        "bottom_right",
        "bottom_bar",
        "fullscreen_above",
        "fullscreen_below"
      ]
    },
    "disabled": {
      "type": "boolean",
      "title": "{PluginDisable}",
      "default": false
    },
    "config": {
      "type": "object",
      "title": "{PluginConfiguration}",
      "properties": {
        "debug": {
          "type": "boolean",
          "title": "{PluginDebug}",
          "default": false
        },
        "displayType": {
          "type": "number",
          "title": "How displaying Google Photos? (0: in Fullscreen, 1: in MagicMirror position)",
          "default": 0,
          "enum": [ 0 , 1 ],
          "minimum": 0,
          "maximum": 1
        },
        "displayDelay": {
          "type": "number",
          "title": "Delay before displaying next photo in the iframe (default is 10 secs)",
          "default": 10000
        },
        "displayInfos": {
          "type": "boolean",
          "title": "Displaying name of the album and photo time",
          "default": true
        },
        "albums": {
          "type": "array",
          "title": "Album Folders names of Google Photos to display",
          "default": [],
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "type": "string"
          }
        },
        "sort": {
          "type": "string",
          "title": "Sort received google photos new, old, random",
          "default": "new",
          "enum": [ "new", "old" , "random" ]
        },
        "hiResolution": {
          "type": "boolean",
          "title": "Displaying photos in Hi-Resolution",
          "default": true
        },
        "timeFormat": {
          "type": "string",
          "title": "Time/date Format",
          "default": "DD/MM/YYYY HH:mm",
          "enum": [ "DD/MM/YYYY HH:mm", "DD/MM/YYYY" , "YYYY/DD/MM HH:mm" , "YYYY/DD/MM"  ]
        },
        "moduleHeight": {
          "type": "number",
          "title": "module Height in px",
          "default": 10000
        },
        "moduleWidth": {
          "type": "number",
          "title": "module Width in px",
          "default": 10000
        },
      },
      "required": ["albums"]
    }
  },
  "required": ["module", "config", "position"]
}

/*
var fr = {
  "description": "Propriété du plugin EXT-GooglePhotos",
  "properties": {
    "module": {
      "title": "Nom du Plugin"
    },
    "position": {
      "title": "Position du plugin"
    },
    "disabled": {
      "title": "Désactive le plugin"
    },
    "config": {
      "title": "Configuration",
      "properties": {
        "debug": {
          "title": "Active le mode debug"
        },
        "displayType": {
          "title": "Comment afficher Google Photos ? (0: en plein écran, 1: en utilisant la position du plugin)"
        },
        "displayDelay": {
          "title": "Délai avant l'affichage de la photo suivante dans l'iframe (la valeur par défaut est de 10 secondes)"
        },
        "displayInfos": {
          "title": "Displaying name of the album and photo time"
        },
        "albums": {
          "title": "Affichage du nom de l'album et de l'heure de la photo"
        },
        "sort": {
          "title": "Trier les photos google reçues (new: nouvelles, old: anciennes, random: aléatoires"
        },
        "hiResolution": {
          "title": "Affichage des photos en haute résolution"
        },
        "timeFormat": {
          "title": "Format heure/date"
        },
        "moduleHeight": {
          "title": "Hauteur du module en px"
        },
        "moduleWidth": {
          "title": "Largeur du module en px"
        }
      }
    }
  }
}
*/

exports.default = defaultConfig
exports.schema = schema
