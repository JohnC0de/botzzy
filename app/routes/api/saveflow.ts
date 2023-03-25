import { type ActionFunction, redirect } from "@remix-run/node"
import { json } from "@remix-run/node"
import { api } from "~/server/api"
import { getCredentials } from "~/server/utils"

export const action: ActionFunction = async ({ request }) => {
  const credentials = await getCredentials(request)
  if (credentials === "notLogged") return redirect("/auth/signin")
  const { user, token } = credentials

  const account_id = user.account_id
  if (!account_id) return null

  const formData = Object.fromEntries(await request.formData())

  const edges = JSON.parse(String(formData.edges))
  const nodes = JSON.parse(String(formData.nodes))
  const flowId = String(formData.flowId)

  const apiResponse = await api.PUT({
    url: `/account/${user.account_id}/flows/${flowId}`,
    data: { edges, nodes },
    token
  })

  return json(apiResponse)
}
