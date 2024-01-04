import {z} from 'zod';


const loginSchema = z.object({
	username: z
		.string()
		.min(3)
})





<div className=" bg-gradient-to-r from-indigo-900 via-gray-800 to-zinc-800 h-screen flex">  

<div className="h-full  w-1/2"></div>
<div className="h-full w-1/2 flex justify-center items-center">
 <div className="flex h-64 w-64 gap-2 rounded-xl border border-white/10 bg-zinc-800/30 backdrop-blur-xl">
        <div className="flex w-72 flex-col p-6">
          <div className="flex h-full flex-col">
            <div className="flex h-1/2 w-full flex-col items-center justify-center gap-1">
              <p className="w-full text-center font-bold text-indigo-500">
                Email
              </p>
              <div className="flex h-7 w-2/3 items-center justify-center rounded-2xl border bg-white/10 text-center text-xs text-white/30 hover:bg-white/30">
                <p>digite seu email</p>
              </div>
            </div>

            <div className="flex h-1/2 w-full flex-col items-center justify-center gap-1">
              <p className="w-full text-center font-bold text-indigo-500">
                Senha
              </p>
              <div className="flex h-7 w-2/3 items-center justify-center rounded-2xl border bg-white/10 text-center text-xs text-white/30 hover:bg-white/30">
                <p>digite aqui sua senha</p>
              </div>
            </div>
          </div>
          <button className="mt-10 w-2/3 self-center rounded-full bg-green-500/10 hover:bg-green-400/50 hover:text-white text-green-600 border-green-600/10 border   transition-colors hover:border-green-600">
            Sign In
          </button>
        </div>
      </div>


</div>
</div>


