export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'fa fa-tachometer',
        },
        {
            divider: true,
        },
        {
            name: 'Content',
            children: [
                {
                    name: 'Models',
                    url: '/content-models',
                    icon: 'fa fa-cubes',
                },
                {
                    name: 'Types',
                    url: '/content-types',
                    icon: 'fa fa-square-o',
                },
                {
                    name: 'Migration Methods',
                    url: '/content-migration-methods',
                    icon: 'fa fa-database',
                },
                {
                    name: 'Validation Rules',
                    url: '/content-validation-rules',
                    icon: 'fa fa-check',
                },
            ],
        },
        {
            name: 'System',
            children: [
                {
                    name: 'Image Categories',
                    url: '/image-categories',
                    icon: 'fa fa-fw fa-image',
                    role_max_priority: 1,
                },
                {
                    name: 'Roles',
                    url: '/roles',
                    icon: 'fa fa-black-tie',
                },
                {
                    name: 'Users',
                    url: '/users',
                    icon: 'fa fa-users',
                },
            ],
        },
    ],
};
