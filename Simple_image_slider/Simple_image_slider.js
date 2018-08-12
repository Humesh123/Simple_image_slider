define( ["qlik","jquery", "text!./style.css", "text!./template.html"], function (qlik, $, cssContent, template ) {'use strict';
    $("<style>").html(cssContent).appendTo("head");
	return {
       template: template,
       initialProperties : {
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 10,
					qHeight : 10
				}]
			}
		},
		definition : {
			type : "items",
			component : "accordion",
			items : {
				settings: {
                        uses: "settings",
                        items: {
                            imageHeader: {
                                type: "items",
                                label: "Image Params",
                                items: {
                                   /* imagePath: {
                                        ref: "imagePath",
                                        label: "fileuplaod",
                                        type: "string",
                                        defaultValue: "/content/default/",
                                        expression: "optional"
                                    },*/

                                      
                                    MyMedia: {
                                        label: "Your first Image",
                                        component: "media",
                                        ref: "myMedia",
                                        layoutRef: "myMedia",
                                        type: "string"
                                    },
                                      MyMediab: {
                                        label: "Your second Image",
                                        component: "media",
                                        ref: "myMediab",
                                        layoutRef: "myMediab",
                                        type: "string"
                                    },
                                      MyMediac: {
                                        label: "Your third Image",
                                        component: "media",
                                        ref: "myMediac",
                                        layoutRef: "myMediac",
                                        type: "string"
                                    },
                                      MyMediad: {
                                        label: "Your fourth Image",
                                        component: "media",
                                        ref: "myMediad",
                                        layoutRef: "myMediad",
                                        type: "string"
                                    },
                                      MyMediae: {
                                        label: "Your fifth Image",
                                        component: "media",
                                        ref: "myMediae",
                                        layoutRef: "myMediae",
                                        type: "string"
                                    },


                                     

                                  /*  imageFilee: {
                                        ref: "imageFilee",
                                        label: "Image File 1",
                                        type: "string",
                                        defaultValue: "Qlik_default_flower.png",
                                        expression: "optional"
                                    },
                                      imageFileee: {
                                        ref: "imageFileee",
                                        label: "Image File 2",
                                        type: "string",
                                        defaultValue: "Qlik_default_green.png",
                                        expression: "optional"
                                    },
									  imageFileeee: {
                                        ref: "imageFileeee",
                                        label: "Image File 3",
                                        type: "string",
                                        defaultValue: "Qlik_default_orange.png",
                                        expression: "optional"
                                    },
									  imageFileeeee: {
                                        ref: "imageFileeeee",
                                        label: "Image File 4",
                                        type: "string",
                                        defaultValue: "Qlik_default_leaf.png",
                                        expression: "optional"
                                    },
									imageFiley: {
                                        ref: "imageFiley",
                                        label: "Image File 4",
                                        type: "string",
                                        defaultValue: "Qlik_default_leaf.png",
                                        expression: "optional"
                                    },*/

                                }
                            }
                        }
                    },
                    Styling:{
                        label:'Image styling',
                        items:{

                           /*  imageStyle: {
                                        ref: "imageStyle",
                                        label: "Image Style CSS",
                                        type: "string",
                                        defaultValue: "display: block;margin: auto;",
                                        expression: "optional"
                                    },*/
                                         fullScreen: {
                                        ref: "fullScreen",
                                        type: "boolean",
                                        component: "checkbox",
                                        label: "Full Screen Option (press F5 after change)",
                                        defaultValue: true
                                    },
                                     width: {
                                        ref: "prosWidth",
                                        label: "width",
                                        type: "string",
                                        defaultValue: "300",
                                        expression: "optional"
                                    },
                                    Height: {
                                        ref: "prosHeight",
                                        label: "Height",
                                        type: "string",
                                        defaultValue: "200",
                                        expression: "optional"
                                    },
                                    /*time: {
                                        ref: "time",
                                        label: "time",
                                        type: "string",
                                        defaultValue: "2500",
                                        expression: "optional"
                                    },*/

                                     effects :{
                                        ref: "props.effects",
                                        label: "Effects",
                                        type: "string",
                                        component: "dropdown",
                                        defaultValue: "w3-animate-left",
                                        options: [
                                          {
                                            value: "w3-animate-left",
                                            label: "animate-left"
                                          },
                                          {
                                            value: "w3-animate-top",
                                            label: "animate-top"
                                          },
                                          {
                                            value: "w3-animate-right",
                                            label: "animate-right"
                                          },
                                           {
                                            value: "w3-animate-zoom",
                                            label: "animate-zoom"
                                          },
                                           {
                                            value: "w3-spin",
                                            label: "spin"
                                          },
                                           {
                                            value: "w3-animate-fading",
                                            label: "animate-fading"
                                          }

                                        ]
                                      }
                                   

                        }
                       

                    }


			}
		},
		support : {
		/*	snapshot: true,
			export: true,
			exportData : true*/
		},



		paint: function ($element,layout ) {

           
      if ( !this.$scope.img ) {
        this.$scope.img = qlik.img( this );
      }

             

           
			return qlik.Promise.resolve();



		},
		controller: ['$scope', function (/*$scope*/) {
		}]
	};

} );
