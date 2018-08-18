import filesConnector from './FilesConnector';
import makeSelectable from './MakeSelectable';
import FilesView from './FilesView';

const FilesViewer = filesConnector(makeSelectable(FilesView));
export default FilesViewer;