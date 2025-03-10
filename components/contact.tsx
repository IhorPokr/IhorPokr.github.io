export function Contact() {
  return (
    <div className="space-y-4 my-2">
      <h2 className="text-xl text-[var(--apple-blue)] font-bold">Contact</h2>
      <div className="space-y-3">
        <p>Feel free to reach out through any of these channels:</p>

        <div className="flex items-center gap-2">
          <span className="text-[var(--apple-subtle)]">Email:</span>
          <a href="mailto:ihorpokrovetskyi@gmail.com" className="text-[var(--apple-blue)] hover:underline">
            ihorpokrovetskyi@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[var(--apple-subtle)]">GitHub:</span>
          <a
            href="https://github.com/IhorPokr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--apple-blue)] hover:underline"
          >
            github.com/IhorPokr
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[var(--apple-subtle)]">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/ihor-pokrovetskyi-3332b1296/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--apple-blue)] hover:underline"
          >
            linkedin.com/in/ihor-pokrovetskyi
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[var(--apple-subtle)]">Twitter:</span>
          <a
            href="https://x.com/pokrovetskyi_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--apple-blue)] hover:underline"
          >
            @pokrovetskyi_
          </a>
        </div>
      </div>

      <div className="mt-4 p-3 border border-[var(--apple-border)] rounded">
        <p className="text-sm">
          Currently <span className="text-[var(--apple-success)]">available</span> for freelance work and collaborations. Don't
          hesitate to get in touch for project inquiries!
        </p>
      </div>
    </div>
  )
}

