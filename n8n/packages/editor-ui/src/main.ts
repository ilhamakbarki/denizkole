// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import 'prismjs';
import 'prismjs/themes/prism.css';
import 'vue-prism-editor/dist/VuePrismEditor.css';
import 'vue-json-pretty/lib/styles.css';
import Vue2TouchEvents from 'vue2-touch-events';

import * as ElementUI from 'element-ui';
// @ts-ignore
import locale from 'element-ui/lib/locale/lang/en';

import './n8n-theme.scss';

import App from '@/App.vue';
import router from './router';

import { runExternalHook } from './components/mixins/externalHooks';

// @ts-ignore
import vClickOutside from 'v-click-outside';
import Fragment from 'vue-fragment';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faAngleDoubleLeft,
	faAngleDown,
	faAngleRight,
	faAngleUp,
	faArrowLeft,
	faArrowRight,
	faAt,
	faBook,
	faBug,
	faCalendar,
	faCheck,
	faChevronDown,
	faChevronUp,
	faCode,
	faCodeBranch,
	faCog,
	faCogs,
	faClock,
	faClone,
	faCloud,
	faCloudDownloadAlt,
	faCopy,
	faCut,
	faDotCircle,
	faEdit,
	faEnvelope,
	faEye,
	faExclamationTriangle,
	faExpand,
	faExternalLinkAlt,
	faExchangeAlt,
	faFile,
	faFileArchive,
	faFileCode,
	faFileDownload,
	faFileExport,
	faFileImport,
	faFilePdf,
	faFolderOpen,
	faGift,
	faHdd,
	faHome,
	faHourglass,
	faImage,
	faInbox,
	faInfo,
	faInfoCircle,
	faKey,
	faMapSigns,
	faNetworkWired,
	faPause,
	faPauseCircle,
	faPen,
	faPlay,
	faPlayCircle,
	faPlus,
	faPlusCircle,
	faQuestion,
	faQuestionCircle,
	faRedo,
	faRss,
	faSave,
	faSearch,
	faSearchMinus,
	faSearchPlus,
	faServer,
	faSignInAlt,
	faSlidersH,
	faSpinner,
	faStop,
	faSun,
	faSync,
	faSyncAlt,
	faTable,
	faTasks,
	faTerminal,
	faThLarge,
	faTimes,
	faTrash,
	faUndo,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { store } from './store';

Vue.use(Vue2TouchEvents);

Vue.use(ElementUI, { locale });
Vue.use(vClickOutside);

library.add(faAngleDoubleLeft);
library.add(faAngleDown);
library.add(faAngleRight);
library.add(faAngleUp);
library.add(faArrowLeft);
library.add(faArrowRight);
library.add(faAt);
library.add(faBook);
library.add(faBug);
library.add(faCalendar);
library.add(faCheck);
library.add(faChevronDown);
library.add(faChevronUp);
library.add(faCode);
library.add(faCodeBranch);
library.add(faCog);
library.add(faCogs);
library.add(faClock);
library.add(faClone);
library.add(faCloud);
library.add(faCloudDownloadAlt);
library.add(faCopy);
library.add(faCut);
library.add(faDotCircle);
library.add(faEdit);
library.add(faEnvelope);
library.add(faEye);
library.add(faExclamationTriangle);
library.add(faExpand);
library.add(faExternalLinkAlt);
library.add(faExchangeAlt);
library.add(faFile);
library.add(faFileArchive);
library.add(faFileCode);
library.add(faFileDownload);
library.add(faFileExport);
library.add(faFileImport);
library.add(faFilePdf);
library.add(faFolderOpen);
library.add(faGift);
library.add(faHdd);
library.add(faHome);
library.add(faHourglass);
library.add(faImage);
library.add(faInbox);
library.add(faInfo);
library.add(faInfoCircle);
library.add(faKey);
library.add(faMapSigns);
library.add(faNetworkWired);
library.add(faPause);
library.add(faPauseCircle);
library.add(faPen);
library.add(faPlay);
library.add(faPlayCircle);
library.add(faPlus);
library.add(faPlusCircle);
library.add(faQuestion);
library.add(faQuestionCircle);
library.add(faRedo);
library.add(faRss);
library.add(faSave);
library.add(faSearch);
library.add(faSearchMinus);
library.add(faSearchPlus);
library.add(faServer);
library.add(faSignInAlt);
library.add(faSlidersH);
library.add(faSpinner);
library.add(faStop);
library.add(faSun);
library.add(faSync);
library.add(faSyncAlt);
library.add(faTable);
library.add(faTasks);
library.add(faTerminal);
library.add(faThLarge);
library.add(faTimes);
library.add(faTrash);
library.add(faUndo);
library.add(faUsers);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;
router.afterEach((to, from) => {
	runExternalHook('main.routeChange', store, { from, to });
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');

if (process.env.NODE_ENV !== 'production') {
	// Make sure that we get all error messages properly displayed
	// as long as we are not in production mode
	window.onerror = (message, source, lineno, colno, error) => {
		if (message.toString().includes('ResizeObserver')) {
			// That error can apparently be ignored and can probably
			// not do anything about it anyway
			return;
		}
		console.error('error caught in main.ts'); // eslint-disable-line no-console
		console.error(message); // eslint-disable-line no-console
		console.error(error); // eslint-disable-line no-console
	};
}
