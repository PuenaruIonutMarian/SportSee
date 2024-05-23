import PropTypes from 'prop-types'
import { createContext } from 'react'
import { DataService } from '../../services/DataService/DataService'

/**
 * Data context to provide the data service to the entire application.
 */
export const DataContext = createContext()

/**
 * Data provider to wrap the application and provide the data service via context.
 * @param {Object} props - The component's properties.
 * @param {React.ReactNode} props.children - The children to wrap with the data provider.
 * @returns {JSX.Element} The wrapped component with the data context.
 */
export const DataProvider = ({ children }) => {
  // Instantiate the data service
  const dataService = new DataService()

  // Render the data provider with context and children
  return (
    <DataContext.Provider value={{ dataService }}>
      {children}
    </DataContext.Provider>
  )
}

// Define prop types for the DataProvider component
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DataProvider
