$(document).ready( function() {

	// menu
	var menu = [
		{
			// top item
			link: "//www.connectingprojects.com",
			target: "_blank",
			class: "sidebar-brand",
			text: "MENU",
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
		}



	];

	var
		// menutext placeholder
		menutext 				= '',
		// menu_target waar menu terecht moet komen
		menu_target 			= '.nav.sidebar-nav';

	process_menu( menu );

	function process_menu( menu ) {

		if ( 'object' !== typeof( menu ) ) return;

		for ($i=0;$i<menu.length;$i++) {
			process_item( menu[$i] );
		}
		$( menu_target ).append( menutext );

	}



	function process_item( item ) {

		if ( 'object' !== typeof( item ) ) return;

		menutext = menutext.concat( '<li class="'+item.class+'"><a href="'+item.link+'" target="'+item.target+'"><i class="'+item.icon+'"></i>'+item.text+'</a>' );
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
