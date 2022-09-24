import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Forbidden from '../../page/Shared/Forbidden';
/**
 * Returns a wheter user has permission or not.
 * @param action is required when using direct function. ModuleID:ModuleAccess
 */
export const checkPermission = (action, modules = undefined, rules = undefined) => {

  if (action === undefined && modules === undefined)
    return true;

  if (rules === undefined)
    rules = JSON.parse(localStorage.getItem('userInfo')).permissions;

  const permissions = rules;
  if (!permissions) {
    return false;
  }

  if (permissions) {
    if (action) {
      if ((!action.includes('||') && permissions.some(e => e.permission === action))
        || (action.includes('||') && permissions.some(e => e.permission !== undefined ? action.includes(e.permission) : false))) {
        return true;
      }
    } else {
      let hasPermission = false;
      modules.split('||').forEach(element => {
        hasPermission = permissions.some(e => e.permission.startsWith(element));
        if(hasPermission) return;
      });
      return hasPermission;
    }
  }

  return false;
};

/**
 * Returns a wheter user has permission or not.
 * @param perform ModuleID:ModuleAccess
 * @param access ModuleID
 */
function Can(props) {
  const { userInfo } = useContext(UserContext);
  return checkPermission(props.perform, props.access, userInfo.permissions)
    ? props.yes()
    : props.no();
}

Can.defaultProps = {
  yes: () => null,
  no: () => <Forbidden />,
};

export default Can;
