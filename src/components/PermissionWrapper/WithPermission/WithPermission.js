import intersection from 'ramda/src/intersection';
import {connect} from 'react-redux';
import compose from 'ramda/src/compose';
import flip from 'ramda/src/flip';
import gt from 'ramda/src/gt';
import length from 'ramda/src/length';

const canView = keys => compose(flip(gt)(0), length, intersection(keys));

/*****************************************************************
 * takes the required permission and check if exists in auth authorities return the child else nullu
 *****************************************************************/
function WithPermission(props) {
  const {authorities, permissions} = props;
  
  return authorities && canView(authorities)(permissions)
    ? props.children
    : null;
}

const mapStateToProps = state => {
  return {authorities: state.auth.authorities};
};

const WithPermissionWrapper = connect(mapStateToProps, null)(WithPermission);

export {WithPermissionWrapper};
