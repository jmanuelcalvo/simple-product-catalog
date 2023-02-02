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
    { name: "Automation as a Service",
      description: "Red Hat Ausible Automation Platfom as a Service",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies lacinia augue, sed tincidunt lorem gravida vitae. Duis pretium lobortis augue, non mattis magna tincidunt in.",
      thumbnail: "grid5.jpg",
      //images: ["show.jpg", "show1.jpg", "show2.jpg", "show3.jpg" ],
      images: ["aap-platform.png" ],
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

  // Services
  [
    // product
    { name: "Database as a Service",
      description: "Database service as a service",
      details: "",
      thumbnail: "svc-database.png",
      images: ["svc-database.png"],
      downloads: []
    },
    // product
    { name: "Virtual Desktop",
      description: "Virtual Desktop",
      details: "",
      thumbnail: "svc-desktop.png",
      images: ["svc-desktop.png"],
      downloads: []
    },
    // product
    { name: "Monitoring as a Service",
      description: "Monitoring as a service",
      details: "",
      thumbnail: "svc-monitor.png",
      images: ["svc-monitor.png"],
      downloads: []
    },
    // product
    { name: "AI/ML as a Service",
      description: "AI/ML as a service",
      details: "",
      thumbnail: "svc-ai.png",
      images: ["svc-ai.png"],
      downloads: []
    },
    // product
    { name: "Mail Server",
      description: "MAil Server",
      details: "",
      thumbnail: "svc-mail.png",
      images: ["svc-mail.png"],
      downloads: []
    },
    // product
    { name: "API Management",
      description: "API Management",
      details: "",
      thumbnail: "svc-api.png",
      images: ["avc-api.png"],
      downloads: []
    }
  ],

  // Virtual Machines
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
    { name: "Other Virtual Machines",
      description: "Please select the operating system version",
      details: "",
      thumbnail: "vm-linux.png",
      images: ["vm-linux.png"],
      downloads: []
    },
    { name: "Windows Virtual Machine",
      description: "Please select the operating system version",
      details: "",
      thumbnail: "vm-win.png",
      images: ["vm-win.png"],
      downloads: []
    },
    // product
    { name: "Android Machines",
      description: "Please select the operating system version",
      details: "",
      thumbnail: "vm-android.png",
      images: ["vm-android.png"],
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
