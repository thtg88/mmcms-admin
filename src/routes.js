import { lazy } from 'react';
import { noInternetConnectionNotification } from './helpers/toastNotification';
import ContentTypeEdit from './views/Resources/ContentTypes/Edit';

const Profile = lazy(() => retry(() => import('./views/Pages/Profile')));
const Dashboard = lazy(() => retry(() => import('./views/Dashboard')));

// Content Field lazies...
const ContentFieldCreate = lazy(() => retry(() => import('./views/Resources/ContentFields/Create')));
const ContentFieldEdit = lazy(() => retry(() => import('./views/Resources/ContentFields/Edit')));
const ContentFieldList = lazy(() => retry(() => import('./views/Resources/ContentFields/List')));

// Content Model lazies...
const ContentModelCreate = lazy(() => retry(() => import('./views/Resources/ContentModels/Create')));
const ContentModelEdit = lazy(() => retry(() => import('./views/Resources/ContentModels/Edit')));
const ContentModelList = lazy(() => retry(() => import('./views/Resources/ContentModels/List')));

// Content Migration Method lazies...
const ContentMigrationMethodCreate = lazy(() => retry(() => import('./views/Resources/ContentMigrationMethods/Create')));
const ContentMigrationMethodEdit = lazy(() => retry(() => import('./views/Resources/ContentMigrationMethods/Edit')));
const ContentMigrationMethodList = lazy(() => retry(() => import('./views/Resources/ContentMigrationMethods/List')));

// Content Type lazies...
const ContentTypeCreate = lazy(() => retry(() => import('./views/Resources/ContentTypes/Create')));
// const ContentTypeEdit = lazy(() => retry(() => import('./views/Resources/ContentTypes/Edit')));
const ContentTypeList = lazy(() => retry(() => import('./views/Resources/ContentTypes/List')));

// Content Validation Rule lazies...
const ContentValidationRuleCreate = lazy(() => retry(() => import('./views/Resources/ContentValidationRules/Create')));
const ContentValidationRuleEdit = lazy(() => retry(() => import('./views/Resources/ContentValidationRules/Edit')));
const ContentValidationRuleList = lazy(() => retry(() => import('./views/Resources/ContentValidationRules/List')));

// Image Category lazies...
const ImageCategoryCreate = lazy(() => retry(() => import('./views/Resources/ImageCategories/Create')));
const ImageCategoryEdit = lazy(() => retry(() => import('./views/Resources/ImageCategories/Edit')));
const ImageCategoriesList = lazy(() => retry(() => import('./views/Resources/ImageCategories/List')));

// Roles lazies...
const RolesList = lazy(() => retry(() => import('./views/Resources/Roles/List')));
const RoleEdit = lazy(() => retry(() => import('./views/Resources/Roles/Edit')));
const RoleCreate = lazy(() => retry(() => import('./views/Resources/Roles/Create')));

// Users lazies...
const UsersList = lazy(() => retry(() => import('./views/Resources/Users/List')));
const UserEdit = lazy(() => retry(() => import('./views/Resources/Users/Edit')));
const UserCreate = lazy(() => retry(() => import('./views/Resources/Users/Create')));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Dashboard },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/me', exact: true, name: 'Profile', component: Profile },
    { path: '/content-migration-methods/create', exact: true,  name: 'Create', component: ContentMigrationMethodCreate },
    { path: '/content-migration-methods/:id', exact: true, name: 'Edit Migration Method', component: ContentMigrationMethodEdit },
    { path: '/content-migration-methods', exact: true,  name: 'Content Migration Methods', component: ContentMigrationMethodList },
    { path: '/content-models/:content_model_id/content-fields/create', exact: true,  name: 'Create', component: ContentFieldCreate },
    { path: '/content-models/:content_model_id/content-fields/:id', exact: true, name: 'Edit Field', component: ContentFieldEdit },
    { path: '/content-models/:content_model_id/content-fields', exact: true,  name: 'Content Fields', component: ContentFieldList },
    { path: '/content-models/create', exact: true,  name: 'Create', component: ContentModelCreate },
    { path: '/content-models/:id', exact: true, name: 'Edit Model', component: ContentModelEdit },
    { path: '/content-models', exact: true,  name: 'Content Models', component: ContentModelList },
    { path: '/content-types', exact: true,  name: 'Content Types', component: ContentTypeList },
    { path: '/content-types/create', exact: true,  name: 'Create', component: ContentTypeCreate },
    { path: '/content-types/:id', exact: true, name: 'Edit Type', component: ContentTypeEdit },
    { path: '/content-validation-rules', exact: true,  name: 'Content Validation Rules', component: ContentValidationRuleList },
    { path: '/content-validation-rules/create', exact: true,  name: 'Create', component: ContentValidationRuleCreate },
    { path: '/content-validation-rules/:id', exact: true, name: 'Edit Validation Rule', component: ContentValidationRuleEdit },
    { path: '/image-categories', exact: true,  name: 'Image Categories', component: ImageCategoriesList },
    { path: '/image-categories/create', exact: true,  name: 'Create', component: ImageCategoryCreate },
    { path: '/image-categories/:id', exact: true, name: 'Edit Role', component: ImageCategoryEdit },
    { path: '/roles', exact: true,  name: 'Roles', component: RolesList },
    { path: '/roles/create', exact: true,  name: 'Create', component: RoleCreate },
    { path: '/roles/:id', exact: true, name: 'Edit Role', component: RoleEdit },
    { path: '/users', exact: true,  name: 'Users', component: UsersList },
    { path: '/users/create', exact: true,  name: 'Create', component: UserCreate },
    { path: '/users/:id', exact: true, name: 'Edit User', component: UserEdit },
];

export default routes;

/**
 * Credits to https://dev.to/goenning/how-to-retry-when-react-lazy-fails-mb5
 */
const retry = (fn, retriesLeft = 5, interval = 1000) => {
    return new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch((error) => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        // maximum retries exceeded
                        noInternetConnectionNotification();
                        return;
                    }

                    // Passing on "reject" is the important part
                    retry(fn, retriesLeft - 1, interval).then(resolve, reject);
                }, interval);
            });
    });
}
