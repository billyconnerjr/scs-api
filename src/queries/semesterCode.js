import { GraphQLString } from 'graphql'
import currentSemesterCode from "../data/semesterCode"

export default {
  type: GraphQLString,
  description: 'Upcoming Semester Code',
  resolve: function(_, args) {
    return currentSemesterCode();
  }
}
