// ID of categories for which products from the last category, aka accessories,
// should be lised below the product description on single.html
categoriesShowAdditionalList = [1,2,3];

categories = [
    { name: "Products", image: "Products.png" },
    { name: "Services", image: "Services.png" },
    { name: "Virtual Machines", image: "VirtualMachines.png" },
  ];

products = [
  // category
  [
    // product
    { name: "OpenShift as a Service",
      description: "Red Hat OpenShift as a Service",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies lacinia augue, sed tincidunt lorem gravida vitae. Duis pretium lobortis augue, non mattis magna tincidunt in.",
      thumbnail: "grid4.jpg",
      //images: ["show.jpg", "show1.jpg", "show2.jpg", "show3.jpg" ],
      images: ["openshift.png" ],
      downloads: []
    },
    // product
    { name: "Odoo as a Service",
      description: "ERP Odoo as a Service",
      details: "",
      thumbnail: "grid6.jpg",
      images: ["odoo_ready_partners_rgb.png"],
      downloads: []
    }
  ],

  // category
  [
    // product
    { name: "Suspendisse consectetur",
      description: "",
      details: "",
      thumbnail: "grid4.jpg",
      images: ["show.jpg"],
      downloads: []
    },
    // product
    { name: "Pellentesque",
      description: "",
      details: "",
      thumbnail: "grid6.jpg",
      images: ["show.jpg"],
      downloads: []
    }
  ],

  // category
  [
    // product
    { name: "RHEL Virtual Machine",
      description: "Please select the operating system version",
      details: "",
      thumbnail: "vm-rhel.png",
      images: ["vm-rhel.png"],
      downloads: []
    },
    // product
    { name: "Windows Virtual Machine",
      description: "Please select the operating system version",
      details: "",
      thumbnail: "vm-win.png",
      images: ["vm-win.png"],
      downloads: []
    },
    // product
    { name: "Other Virtual Machines",
      description: "Please select the operating system version",
      details: "",
      thumbnail: "vm-linux.png",
      images: ["vm-linux.png"],
      downloads: []
    },
    // product
    { name: "Solaris Virtual Machines",
      description: "Please select the operating system version",
      details: "",
      thumbnail: "vm-solaris.png",
      images: ["vm-solaris.png"],
      downloads: []
    }
  ],

  // category
]
