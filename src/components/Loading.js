import React from 'react'

export default function Loading() {
    return (
        <div className="rounded-3xl border-white border-2 w-9/12 mb-2 px-5 min-h-8 content-center">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4 py-1.5">
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
