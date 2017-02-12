import {signInWithGithub} from 'cerebral-provider-firebase'
import {set} from 'cerebral/operators'
import {state, props} from 'cerebral/tags'
import showSnackbar from 'modules/app/factories/showSnackbar'

export default [
  signInWithGithub(), {
    success: [
      set(state`app.user`, props`user`),
      ...showSnackbar('Signed in', 5000)
    ],
    error: [
      ...showSnackbar('Was not able to sign you in with Github, sorry', 5000, 'error')
    ]
  }
]