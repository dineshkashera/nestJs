import { User } from './User' ;
import { Company } from './Company' ;
import { CustomMap} from './CustomMap';

const customMap = new CustomMap('map');
customMap.addMarkers(new User());
customMap.addMarkers(new Company());
