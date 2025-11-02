import prisma from '../../../../prismaClient'

export async function GET() {
  try {
    // simple query to ensure DB is reachable
    await prisma.$queryRaw`SELECT 1`
    return new Response(JSON.stringify({ ok: true, db: 'connected' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: String(err.message || err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
