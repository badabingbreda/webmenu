$(document).ready( function() {

	// menu
	var menu = [
		{
			// top item
			link: "//www.connectingprojects.com",
			target: "_blank",
			class: "sidebar-brand",
			text: "Connecting",
			icon: ""
		},
		{
			link: "/0000/home",
			target: "_self",
			class: "",
			text: "Home",
			icon: "fa fa-fw fa-home"
		},
		{
			link: "/0000/adressen",
			target: "_self",
			class: "",
			text: "Adressen",
			icon: "fa fa-fw fa-address-book"
		},
		{
			link: "/0000/nieuws",
			target: "_self",
			class: "",
			text: "Nieuws",
			icon: "fa fa-fw fa-newspaper"
		},
		{
			link: "/0000/gebruikers",
			target: "_self",
			class: "",
			text: "Gebruikers",
			icon: "fa fa-fw fa-users"
		},
		{
			link: "/0000/uitgegaan",
			target: "_self",
			class: "",
			text: "Uitgegaan",
			icon: "fa fa-fw fa-share-square",
			sub: [
					{
						link: "/0000/uitgegaan/bim-spin",
						target: "_self",
						class: "",
						text: "BIM-SPIN",
						icon: ""
					},
					{
						link: "/0000/uitgegaan/video",
						target: "_self",
						class: "",
						text: "Video",
						icon: ""
					},
					{
						link: "/0000/uitgegaan/tips",
						target: "_self",
						class: "",
						text: "Tips",
						icon: "",
						sub: [
								{
									link: "/0000/uitgegaan/tips/level-2-tips",
									target: "_self",
									class: "",
									text: "level 2 Tips",
									icon: ""
								},
								{
									link: "/0000/uitgegaan/tips/level-2-video",
									target: "_self",
									class: "",
									text: "level 2 Video",
									icon: ""
								}

						]
					}
			]
		},
		{
			link: "/0000/foto",
			target: "_self",
			class: "",
			text: "Foto",
			icon: "fa fa-fw fa-image"
		},
		{
			link: "/0000/tekeningen",
			target: "_self",
			class: "",
			text: "Tekeningen",
			icon: "fa fa-fw fa-pencil-alt"
		},
		{
			link: "/0000/contact",
			target: "_self",
			class: "",
			text: "Contact Support",
			icon: "fa fa-fw fa-envelope"
		}

	];

	var
		// menutext placeholder
		menutext 				= '',
		// menu_target waar menu terecht moet komen
		menu_target 			= '.nav.sidebar-nav';

	process_menu( menu );

	/**
	 * Process the menu items on top level
	 * @param  object menu
	 * @return void
	 */
	function process_menu( menu ) {

		// if menu isn't an object return early
		if ( 'object' !== typeof( menu ) ) return;

		// process all items in the menu
		for ($i=0;$i<menu.length;$i++) {
			process_item( menu[$i] );
		}

		// append the menutext to the menu targetarea
		$( menu_target ).append( menutext );

	}

	/**
	 * Process one item, recursively
	 * @param  object item
	 * @return void
	 */
	function process_item( item ) {

		//if item isn't an object retrun early
		if ( 'object' !== typeof( item ) ) return;

		// concat the menutext since we will need to add text along the way, no autoclosing of elements
		menutext = menutext.concat( '<li class="'+item.class+'"><a href="'+item.link+'" target="'+item.target+'"><i class="'+item.icon+'"></i>'+item.text+'</a>' );

		// check if this menuitem has sub-items,
		// if so pass the item on to this function recursively
		if (item.sub && item.sub.length>0) {
			menutext = menutext.concat('<ul>');
			for ($j=0;$j<item.sub.length;$j++) {
				process_item( item.sub[$j] );
			}
			menutext = menutext.concat('</ul>');
		}
		menutext = menutext.concat( '</li>' );
	}


});
